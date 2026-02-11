package service

import (
	"context"

	"github.com/romina-kh/NetEng-Project/backend/internal/model"
)

type UserService interface {
	Signup(ctx context.Context, user model.User, password string) (int, error)
	Login(ctx context.Context, identifier string, password string) (*model.User, error)
}
