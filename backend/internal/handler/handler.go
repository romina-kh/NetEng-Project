package handler

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/romina-kh/NetEng-Project/backend/internal/dto"
	"github.com/romina-kh/NetEng-Project/backend/internal/model"
	"github.com/romina-kh/NetEng-Project/backend/internal/service"
)

type Handler struct {
	service service.UserService
}

func NewHandler(service service.UserService) *Handler {
	return &Handler{service: service}
}

func (h *Handler) Signup(c *gin.Context) {
	var req dto.SignupRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request"})
		return
	}

	user := model.User{
		Name: req.Name,
		Family: req.Family,
		Email:    req.Email,
		PhoneNumber: req.PhoneNumber,
		Birthday: req.Birthday,
		Address: req.Address,
	}

	status, err := h.service.Signup(c.Request.Context(), user, req.Password)
	if err != nil {
		c.JSON(status, gin.H{"error": fmt.Sprintf("Signup failed: %s", err.Error())})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"message": "user created successfully",
	})
}
