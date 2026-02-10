package service

import (
	"net/http"

	"github.com/romina-kh/NetEng-Project/backend/internal/model"
	"github.com/romina-kh/NetEng-Project/backend/internal/repository"
)

type Service struct {
	postgressRepo *repository.PostgressRepo
}

func NewService(repo *repository.PostgressRepo) *Service {
	return &Service{postgressRepo: repo}
}

func (s *Service) Signup(user model.User) (int, error) {
	err := s.postgressRepo.Signup(user)
	if err != nil {
		return http.StatusBadRequest, err
	}
	return http.StatusAccepted, nil
}
