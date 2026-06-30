package handler

import (
	"errors"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/romina-kh/NetEng-Project/backend/internal/dto"
	"github.com/romina-kh/NetEng-Project/backend/internal/model"
	"github.com/romina-kh/NetEng-Project/backend/internal/service"
	utility "github.com/romina-kh/NetEng-Project/backend/internal/utils"
)

type Handler struct {
	service service.AuthService
}

func NewHandler(service service.AuthService) *Handler {
	return &Handler{service: service}
}

func (h *Handler) Signup(c *gin.Context) {
	var req dto.SignupRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		//c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request"})
		c.JSON(http.StatusBadRequest, dto.ErrorResponse{
			Error: "invalid request",
		})
		return
	}

	user := model.User{
		Name:        req.Name,
		Family:      req.Family,
		Role:        req.Role,
		Email:       req.Email,
		PhoneNumber: req.PhoneNumber,
		Birthday:    req.Birthday,
		Address:     req.Address,
	}

	userID, err := h.service.Signup(c.Request.Context(), user, req.Password)
	if err != nil {
		log.Printf("Internal Error: %v", err)

		if errors.Is(err, model.ErrPhoneAlreadyExists) {
			c.JSON(http.StatusConflict, dto.ErrorResponse{
				Error: "phone already exists",
			})
			return
		} else if errors.Is(err, model.ErrEmailAlreadyExists) {
			c.JSON(http.StatusConflict, dto.ErrorResponse{
				Error: "email already exists",
			})
		}
		c.JSON(http.StatusInternalServerError, dto.ErrorResponse{
			Error: "signup failed. please try again later.",
		})
		return
	}

	token, err := utility.GenerateJwtToken(userID, user.PhoneNumber, user.Name, user.Family)
	if err != nil {
		log.Printf("token generation failed: %v", err)
		c.JSON(http.StatusInternalServerError, dto.ErrorResponse{
			Error: "signup failed. please try again later.",
		})
		return
	}

	c.SetCookie("auth_token", token, 3600*24, "/", "", false, false)

	c.JSON(http.StatusCreated, dto.SignupResponse{
		Message: "signup successfully",
	})
}

func (h *Handler) Login(c *gin.Context) {
	var req dto.LoginRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, dto.ErrorResponse{
			Error: "request failed!",
		})
		return
	}

	user, err := h.service.Login(c.Request.Context(), req.Identifier, req.Password)
	if err != nil {
		log.Printf("Internal Error: %v", err)
		c.JSON(http.StatusInternalServerError, dto.ErrorResponse{Error: err.Error()})
		return
	}

	token, err := utility.GenerateJwtToken(user.ID, user.PhoneNumber, user.Name, user.Family)
	if err != nil {
		log.Printf("token generation failed: %v", err)
		c.JSON(http.StatusInternalServerError, dto.ErrorResponse{
			Error: "login failed. please try again later.",
		})
		return
	}

	c.SetCookie("auth_token", token, 3600*24, "/", "", false, false)

	c.JSON(http.StatusOK, dto.LoginResponse{
		Message: "you are logged in successfully",
	})
}
