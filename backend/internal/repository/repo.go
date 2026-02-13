package repository

import (
	"context"

	"github.com/romina-kh/NetEng-Project/backend/internal/model"
)

type UserRepository interface {
	CreateUser(ctx context.Context, user *model.User) (int, error)
	ExistsByEmail(ctx context.Context, email string) (bool, error)
	ExistsByPhoneNumber(ctx context.Context, email string) (bool, error)
	GetByEmailOrPhone(ctx context.Context, identifier string) (*model.User, error)
}

type ProductRepository interface {
	GetAllServers() ([]model.Server, error)
}