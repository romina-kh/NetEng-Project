package handler

import (
	"errors"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/romina-kh/NetEng-Project/backend/internal/dto"
	"github.com/romina-kh/NetEng-Project/backend/internal/model"
	"github.com/romina-kh/NetEng-Project/backend/internal/service"
)

type UserHandler struct {
	service service.UserService
}

func NewUserHandler(service service.UserService) *UserHandler {
	return &UserHandler{service: service}
}

func (h *UserHandler) ME(c *gin.Context) {
	id, _ := c.Get("user_id")
	intID := id.(int)

	user, err := h.service.Me(c.Request.Context(), intID)
	if err != nil {
		log.Println(err.Error())
		if errors.Is(err, model.ErrUserNotFound) {
			c.JSON(http.StatusNotFound, dto.ErrorResponse{
				Error: "user not found",
			})
			return
		}
		c.JSON(http.StatusInternalServerError, dto.ErrorResponse{
			Error: "internal server error. please try again later.",
		})
		return
	}

	c.JSON(http.StatusOK, dto.MeResponse{
		Name:         user.Name,
		Family:       user.Family,
		Email:        user.Email,
		PhoneNumber:  user.PhoneNumber,
		PasswordHash: "",
		Birthday:     user.Birthday,
		Address:      user.Address,
		Avatar:       user.Avatar,
	})
}

func (h *UserHandler) EditProfile(c *gin.Context) {
	id, _ := c.Get("user_id")
	intID := id.(int)

	var req dto.EditProfileRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, dto.ErrorResponse{
			Error: "invalid request",
		})
	}

	err := h.service.EditProfile(c.Request.Context(), &req, intID)
	if err != nil {
		log.Println(err.Error())
		if errors.Is(err, model.ErrUserNotFound) {
			c.JSON(http.StatusNotFound, dto.ErrorResponse{
				Error: "user not found",
			})
			return
		}
		c.JSON(http.StatusInternalServerError, dto.ErrorResponse{
			Error: "internal server error. please try again later.",
		})
		return
	}

	c.JSON(http.StatusOK, dto.EditProfileResponse{
		Message: "your changes saved successfully",
	})
}
