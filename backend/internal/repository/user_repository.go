package repository

import (
	"context"
	"errors"

	"github.com/romina-kh/NetEng-Project/backend/internal/model"
	"gorm.io/gorm"
)

type userRepo struct {
	db *gorm.DB
}

func NewuserRepo(db *gorm.DB) UserRepository {
	return &userRepo{
		db: db,
	}
}

func (r *userRepo) CreateUser(ctx context.Context, user model.User) (int, error) {

	return 0, nil
}

func (r *userRepo) ExistsByEmail(ctx context.Context, email string) (bool, error) {

	return true, nil
}

func (r *userRepo) ExistsByPhonenumber(ctx context.Context, phoneNumber string) (bool, error) {
	var count int64

	err := r.db.WithContext(ctx).
		Model(&model.User{}).
		Where("phone_number = ?", phoneNumber).
		Count(&count).Error

	if err != nil {
		return false, err
	}

	return true, nil
}

func (r *userRepo) GetByEmailOrPhone(ctx context.Context, identifier string) (*model.User, error) {
	var user model.User

	err := r.db.WithContext(ctx).
		Where("email = ? OR phone_number = ?", identifier, identifier).
		First(&user).Error

	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, model.ErrUserNotFound
		}
		return nil, err
	}

	return &user, nil
}