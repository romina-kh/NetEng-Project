package service

import "github.com/romina-kh/NetEng-Project/backend/internal/repository"

type Service struct {
	postgressRepo *repository.Repository
}

func NewService(repo *repository.Repository) *Service {
	return &Service{postgressRepo: repo}
}
