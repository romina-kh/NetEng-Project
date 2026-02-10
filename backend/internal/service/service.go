package service

import (
	"context"

	"github.com/romina-kh/NetEng-Project/backend/internal/model"
	"github.com/romina-kh/NetEng-Project/backend/internal/repository"
)

type Service interface {
	Signup(ctx context.Context, user model.User, password string) (int, error)
}

type service struct {
	repo repository.Repository
}

func NewService(repo repository.Repository) Service {
	return &service{repo: repo}
}
