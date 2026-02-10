package service

import (
	"context"
	"net/http"

	"github.com/romina-kh/NetEng-Project/backend/internal/model"
	"github.com/romina-kh/NetEng-Project/backend/internal/repository"
)

type authService struct {
	repo *repository.PostgressRepo
}

func NewAuthService(repo *repository.PostgressRepo) AuthService {
	return &authService{repo: repo}
}

func (s *authService) Signup(ctx context.Context, user model.User, password string) (int, error) {
	err := s.repo.CreateUser(ctx, user)

	if err != nil {
		return http.StatusBadRequest, err
	}
	return http.StatusAccepted, nil
}
