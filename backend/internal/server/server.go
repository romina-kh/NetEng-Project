package server

import (
	"log"

	"github.com/romina-kh/NetEng-Project/backend/internal/handler"
	"github.com/romina-kh/NetEng-Project/backend/internal/router"
)

func StartServer(handler *handler.Handler) {
	r := router.SetupRouter(handler)

	log.Println("Server started on :8080")
	if err := r.Run(":8080"); err != nil {
		log.Fatal(err)
	}
}
