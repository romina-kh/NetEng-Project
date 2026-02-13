package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/romina-kh/NetEng-Project/backend/internal/service"
)

type ProductHandler struct {
	service service.ProductService
}

func NewProductHandler(service service.ProductService) *ProductHandler {
	return &ProductHandler{service: service}
}

func (h *ProductHandler) GetServers(c *gin.Context) {

	products, err := h.service.GetServers()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, products)
}