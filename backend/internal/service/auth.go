package service

import (
	"context"

	"github.com/romina-kh/NetEng-Project/backend/internal/model"
)

type AuthService interface {
	Signup(ctx context.Context, user model.User, password string) (int, error)
}
