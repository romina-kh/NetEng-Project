package router

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/romina-kh/NetEng-Project/backend/internal/handler"
)

func SetupRouter(uh *handler.Handler, ph *handler.ProductHandler) *gin.Engine {
	r := gin.Default()

	r.Use(cors.Default())

	api := r.Group("/api/v1")

	user := api.Group("/user")
	user.POST("/signup", uh.Signup)
	user.POST("/login", uh.Login)

	product := api.Group("/product")
	product.GET("/servers", ph.GetServers)

	return r
}
