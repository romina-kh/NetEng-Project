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
	GetByUserID(ctx context.Context, userID int) (*model.User, error)
	UpdateUserProfile(ctx context.Context, user *model.User, userID int) error
}

type ProductRepository interface {
	GetAllServers() ([]*model.Server, error)
	GetServerByID(ctx context.Context, serverID int) (*model.Server, error)
}
