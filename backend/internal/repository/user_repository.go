package repository

import (
	"context"

	"github.com/romina-kh/NetEng-Project/backend/internal/db"
	"github.com/romina-kh/NetEng-Project/backend/internal/model"
)

type userRepository struct {
	db *db.PostgressDB
}

func NewUserRepository(db *db.PostgressDB) UserRepository {
	return &userRepository{
		db: db,
	}
}

func (r *userRepository) CreateUser(ctx context.Context, user model.User) error {
	return nil
}

func (r *userRepository) ExistsByEmail(ctx context.Context, email string) (bool, error) {

	return false,nil
}

func (r *userRepository) ExistsByPhonenumber(ctx context.Context, email string) (bool, error) {

	return false,nil
}