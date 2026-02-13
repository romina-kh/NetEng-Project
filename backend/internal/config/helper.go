package config

import (
	"github.com/joho/godotenv"
	"log"
	"os"
)

func init() {
	Load(".env")
}

func Load(file string) {
	err := godotenv.Load(file)
	if err != nil {
		log.Println("can't find .env file")
	}
}

func GetEnv(key, defaultValue string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return defaultValue
}
