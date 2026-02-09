package db

import "github.com/romina-kh/NetEng-Project/backend/internal/config"

type PostgressDB struct {
}

func NewPostgressDB(cfg *config.Config) *PostgressDB {

	return &PostgressDB{}
}
