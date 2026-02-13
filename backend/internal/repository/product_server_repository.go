package repository

import (
	"fmt"

	"github.com/romina-kh/NetEng-Project/backend/internal/model"
	"gorm.io/gorm"
)

type productRepository struct {
	db *gorm.DB
}

func (r *productRepository) GetAllServers() ([]model.Server, error) {
	var servers []model.Server
	result := r.db.Model(&model.Server{}).Find(&servers)

	if result.Error != nil {
		return nil, fmt.Errorf("repo-GetAllServers: failed to fetch servers: %w", result.Error)
	}

	return servers, nil
}
