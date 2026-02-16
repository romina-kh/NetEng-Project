package handler

import (
	"errors"
	"log"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/romina-kh/NetEng-Project/backend/internal/dto"
	"github.com/romina-kh/NetEng-Project/backend/internal/service"
	"gorm.io/gorm"
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
		log.Printf("Internal Error: %v", err)
		c.JSON(http.StatusInternalServerError, dto.ErrorResponse{
			Error: "An unexpected error acquired. please try again later.",
		})
		return
	}

	c.JSON(http.StatusOK, products)
}

func (h *ProductHandler) GetServer(c *gin.Context) {
	id := c.Param("id")
	intID, _ := strconv.Atoi(id)

	server, err := h.service.GetServer(c.Request.Context(), intID)
	if err != nil {
		log.Print("Internal error: ", err.Error())
		if errors.Is(err, gorm.ErrRecordNotFound) {
			c.JSON(http.StatusNotFound, dto.ErrorResponse{
				Error: "Product not found",
			})
			return
		}
		c.JSON(http.StatusInternalServerError, dto.ErrorResponse{
			Error: "can't fetch product. please try again",
		})
		return
	}

	c.JSON(http.StatusOK, dto.GetServerResponse{
		Server: *server,
	})
}
