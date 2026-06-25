package repository

import (
	"context"
	"errors"
	"fmt"

	"github.com/romina-kh/NetEng-Project/backend/internal/model"
	"gorm.io/gorm"
)

type productRepository struct {
	db *gorm.DB
}

func NewProductRepository(db *gorm.DB) ProductRepository {
	return &productRepository{
		db: db,
	}
}

func (r *productRepository) GetAllServers() ([]*model.Server, error) {
	var servers []*model.Server
	result := r.db.Model(&model.Server{}).Find(&servers)

	if result.Error != nil {
		return nil, fmt.Errorf("repo-GetAllServers: failed to fetch servers: %w", result.Error)
	}

	return servers, nil
}

func (r *productRepository) GetServerByID(ctx context.Context, serverID int) (*model.Server, error) {

	var server model.Server
	result := r.db.WithContext(ctx).Model(&model.Server{}).Where("server_number = ?", serverID).Find(&server)

	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			return nil, fmt.Errorf("repo-GetServerByID: server with id %v: %w", serverID, model.ErrServerNotFound)
		}
		return nil, fmt.Errorf("repo-GetServerByID: failed to fetch server: %w", result.Error)
	}

	return &server, nil
}
