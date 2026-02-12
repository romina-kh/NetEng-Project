package db

import (
	"fmt"
	"log"
	"sync"

	_ "github.com/lib/pq"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var (
	db *gorm.DB
	mu sync.Mutex
)

func NewPostgressDB(cfg *PostGresConfig) *gorm.DB {
	if db != nil {
		return db
	}

	mu.Lock()
	defer mu.Unlock()

	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		cfg.Host,
		cfg.User,
		cfg.Password,
		cfg.DBName,
		cfg.Port,
	)

	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Failed to connect database: %v", err)
	}

	db = database
	return db
}
