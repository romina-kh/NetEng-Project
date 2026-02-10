package repository

import (
	"github.com/romina-kh/NetEng-Project/backend/internal/db"
	"github.com/romina-kh/NetEng-Project/backend/internal/model"
)

type PostgressRepo struct {
	db *db.PostgressDB
}

func NewRepository(db *db.PostgressDB) *PostgressRepo {
	return &PostgressRepo{
		db: db,
	}
}

func (r *PostgressRepo) Signup(model.User) error {
	return nil
}
