package service

import (
	"context"

	"github.com/romina-kh/NetEng-Project/backend/internal/dto"
	"github.com/romina-kh/NetEng-Project/backend/internal/model"
)

type AuthService interface {
	Signup(ctx context.Context, user model.User, password string) (int, error)
	Login(ctx context.Context, identifier string, password string) (*model.User, error)
}

type UserService interface {
	Me(context.Context, int) (*model.User, error)
	EditProfile(ctx context.Context, user *dto.EditProfileRequest, id int) error
}

type ProductService interface {
	GetServers() ([]*model.Server, error)
	GetServer(ctx context.Context, id int) (*model.Server, error)
}
