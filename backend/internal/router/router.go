package router

import (
	"github.com/gin-gonic/gin"
	"github.com/romina-kh/NetEng-Project/backend/internal/handler"
)

func SetupRouter(h *handler.Handler) *gin.Engine {
	r := gin.Default()

	user := r.Group("/user")

	user.POST("/signup", h.Signup)


	return r
}
