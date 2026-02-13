package server

import (
	"log"

	"github.com/gin-contrib/cors"
	"github.com/romina-kh/NetEng-Project/backend/internal/handler"
	"github.com/romina-kh/NetEng-Project/backend/internal/router"
)

func StartServer(userHandler *handler.Handler, productHandler *handler.ProductHandler) {
	r := router.SetupRouter(userHandler, productHandler)

	log.Println("Server started on :8080")
	r.Use(cors.Default())
	if err := r.Run(":8080"); err != nil {
		log.Fatal(err)
	}
}
