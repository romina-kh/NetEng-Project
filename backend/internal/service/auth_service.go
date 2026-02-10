package service

import (
	"context"
	"net/http"

	"github.com/romina-kh/NetEng-Project/backend/internal/model"
)

func (s *service) Signup(ctx context.Context, user model.User, password string) (int, error) {
	err := s.repo.CreateUser(ctx, user)

	if err != nil {
		return http.StatusBadRequest, err
	}
	return http.StatusAccepted, nil
}
