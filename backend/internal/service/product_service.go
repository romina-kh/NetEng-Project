package service

import (
	"github.com/romina-kh/NetEng-Project/backend/internal/model"
	"github.com/romina-kh/NetEng-Project/backend/internal/repository"
)

type productService struct {
	repo repository.ProductRepository
}

func NewProductService(repo repository.ProductRepository) ProductService {
	return &productService{repo: repo}
}

func (s *productService) GetServers() ([]model.Server, error) {
	return s.repo.GetAllServers()
}
