package main

import (
	"log"

	"github.com/romina-kh/NetEng-Project/backend/internal/config"
	"github.com/romina-kh/NetEng-Project/backend/internal/db"
	"github.com/romina-kh/NetEng-Project/backend/internal/handler"
	"github.com/romina-kh/NetEng-Project/backend/internal/repository"
	"github.com/romina-kh/NetEng-Project/backend/internal/server"
	"github.com/romina-kh/NetEng-Project/backend/internal/service"
)

func main() {
	cfg, err := config.LoadConfig()
	if err != nil {
		log.Fatal("Failed to load config:", err)
	}

	postgressdb := db.NewPostgresDB(cfg.Postgres)

	userRepo := repository.NewuserRepo(postgressdb)
	producRepo := repository.NewProductRepository(postgressdb)

	userService := service.NewUserService(userRepo)
	productService := service.NewProductService(producRepo)

	userHandler := handler.NewHandler(userService)
	productHandler := handler.NewProductHandler(productService)

	server.StartServer(userHandler, productHandler)
}
