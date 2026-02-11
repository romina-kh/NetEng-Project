package config

import "github.com/romina-kh/NetEng-Project/backend/internal/db"

type Config struct {
	Postgres *db.PostGresConfig
}

func LoadConfig() (*Config, error) {

	config := Config{
		Postgres: &db.PostGresConfig{},
	}

	config.Postgres.Host = GetEnv("DB_HOST", "localhost")
	config.Postgres.Port = GetEnv("DB_PORT", "5432")
	config.Postgres.User = GetEnv("DB_USER", "postgres")
	config.Postgres.DBName = GetEnv("DB_NAME", "techyar")
	config.Postgres.Password = GetEnv("DB_PASSWORD", "")

	return &config, nil
}
