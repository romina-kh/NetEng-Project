package router

import (
	"github.com/gin-gonic/gin"
	"github.com/romina-kh/NetEng-Project/backend/internal/handler"
)

func SetupRouter(h *handler.Handler) *gin.Engine {
	r := gin.Default()
	return r
}
