package db

import (
	"database/sql"
	"fmt"
	"log"
	"sync"

	_ "github.com/lib/pq"
)

var (
	instanse *sql.DB
	mu       sync.Mutex
)

func NewPostgressDB(cfg *PostGresConfig) *sql.DB {
	if instanse != nil {
		return instanse
	}

	mu.Lock()
	defer mu.Unlock()

	connStr := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		cfg.Host, cfg.Port, cfg.User, cfg.Password, cfg.DBName)

	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Printf("Failed to open database: %v", err)
		return nil
	}

	if err := db.Ping(); err != nil {
		log.Printf("Failed to ping database: %v", err)
		return nil
	}

	instanse = db
	log.Println("Database connected successfully")

	return instanse
}
