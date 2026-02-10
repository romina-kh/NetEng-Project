package repository

import "github.com/romina-kh/NetEng-Project/backend/internal/db"

type Repository struct {
	db *db.PostgressDB
}

func NewRepository(db *db.PostgressDB) *Repository {
	return &Repository{
		db: db,
	}
}
