package service

import (
	"context"
	"errors"
	"fmt"

	"github.com/romina-kh/NetEng-Project/backend/internal/dto"
	"github.com/romina-kh/NetEng-Project/backend/internal/model"
	"github.com/romina-kh/NetEng-Project/backend/internal/repository"
)

type userService struct {
	repo repository.UserRepository
}

func NewUserService(repo repository.UserRepository) UserService {
	return &userService{repo: repo}
}

func (s *userService) Me(ctx context.Context, id int) (*model.User, error) {
	user, err := s.repo.GetByUserID(ctx, id)
	if err != nil {
		if errors.Is(err, model.ErrUserNotFound) {
			return nil, model.ErrInvalidCredentials
		}
		return nil, fmt.Errorf("service-Me: get user by ID : %w", err)
	}

	return user, nil
}

func (s *userService) EditProfile(ctx context.Context, updatedUser *dto.EditProfileRequest, id int) error {
	user := model.User{
		Name:        updatedUser.Name,
		Family:      updatedUser.Family,
		PhoneNumber: updatedUser.PhoneNumber,
		Email:       updatedUser.Email,
		Birthday:    updatedUser.Birthday,
		Address:     updatedUser.Address,
		Avatar:      updatedUser.Avatar,
	}

	err := s.repo.UpdateUserProfile(ctx, &user, id)
	if err != nil {
		if errors.Is(err, model.ErrUserNotFound) {
			return model.ErrInvalidCredentials
		}
		return fmt.Errorf("service-EditProfile: get user by ID : %w", err)
	}

	return nil
}
