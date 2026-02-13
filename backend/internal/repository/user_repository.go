package repository

import (
	"context"
	"errors"
	"fmt"

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

func (r *userRepo) CreateUser(ctx context.Context, user *model.User) (int, error) {

	err := r.db.WithContext(ctx).Create(&user).Error
	if err != nil {
		if errors.Is(err, gorm.ErrDuplicatedKey) {
			return 0, fmt.Errorf("repo-CreateUser: user %v already exists: %w", user.Name, model.ErrUserAlreadyExists)
		}

		return 0, fmt.Errorf("repo-CreateUser: failed to create user %v: %w", user.Name, err)
	}

	return user.ID, nil

}

func (r *userRepo) ExistsByEmail(ctx context.Context, email string) (bool, error) {

	var count int64

	err := r.db.WithContext(ctx).
		Model(&model.User{}).
		Where("email = ?", email).
		Count(&count).Error

	if err != nil {
		return false, fmt.Errorf("repo-ExistByEmail: check failed for email %v: %w", email, err)
	}

	if count > 0 {
		return true, nil
	}

	return false, nil
}

func (r *userRepo) ExistsByPhoneNumber(ctx context.Context, phoneNumber string) (bool, error) {
	var count int64

	err := r.db.WithContext(ctx).
		Model(&model.User{}).
		Where("phone_number = ?", phoneNumber).
		Count(&count).Error

	if err != nil {
		return false, fmt.Errorf("repo-ExistByPhone: check failed for phone %v: %w", phoneNumber, err)
	}

	if count > 0 {
		return true, nil
	}

	return false, nil
}

func (r *userRepo) GetByEmailOrPhone(ctx context.Context, identifier string) (*model.User, error) {
	var user model.User

	err := r.db.WithContext(ctx).
		Where("email = ? OR phone_number = ?", identifier, identifier).
		First(&user).Error

	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, fmt.Errorf("repo-GetByEmailOrPhone: user with %v: %w ", identifier, model.ErrUserNotFound)
		}

		return nil, fmt.Errorf("repo-GetByEmailOrPhone: failed to execute query for user with %v: %w ", identifier, err)
	}

	return &user, nil
}
