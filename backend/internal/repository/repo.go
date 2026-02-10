package repository

import (
	"context"

	"github.com/romina-kh/NetEng-Project/backend/internal/db"
	"github.com/romina-kh/NetEng-Project/backend/internal/model"
)

type Repository interface {
	CreateUser(ctx context.Context, user model.User) error
}

type PostgressRepo struct {
	db *db.PostgressDB
}

func NewRepository(db *db.PostgressDB) *PostgressRepo {
	return &PostgressRepo{
		db: db,
	}
}
