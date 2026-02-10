package handler

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/romina-kh/NetEng-Project/backend/internal/dto"
	"github.com/romina-kh/NetEng-Project/backend/internal/service"
)

type Handler struct {
	service *service.Service
}

func NewHandler(service *service.Service) *Handler {
	return &Handler{service: service}
}

func (h *Handler) Signup(c *gin.Context) {
	var req dto.SignupRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request"})
		return
	}

	status, err := h.service.Signup(req)
	if err != nil {
		c.JSON(status, gin.H{"error": fmt.Sprintf("Signup failed: %s", err.Error())})
		return
	}
}
