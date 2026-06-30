package router

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/romina-kh/NetEng-Project/backend/internal/handler"
	"github.com/romina-kh/NetEng-Project/backend/internal/middleware"
)

func SetupRouter(uh *handler.Handler, ph *handler.ProductHandler, us *handler.UserHandler) *gin.Engine {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Content-Type"},
		AllowCredentials: true,
	}))

	api := r.Group("/api/v1")

	auth := api.Group("/auth")
	auth.POST("/signup", uh.Signup)
	auth.POST("/login", uh.Login)

	user := api.Group("/user")
	user.Use(middleware.JWTAuth())
	user.GET("/me", us.ME)
	user.PUT("/edit", us.EditProfile)

	product := api.Group("/product")
	product.GET("/servers", ph.GetServers)
	product.GET("/servers/:id", ph.GetServer)

	return r
}
