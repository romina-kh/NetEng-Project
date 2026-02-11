package service

import (
	"context"
	"errors"
	"fmt"

	"github.com/romina-kh/NetEng-Project/backend/internal/model"
	"github.com/romina-kh/NetEng-Project/backend/internal/repository"
	"golang.org/x/crypto/bcrypt"
)

type userservice struct {
	repo repository.UserRepository
}

func NewUserService(repo repository.UserRepository) UserService {
	return &userservice{repo: repo}
}

func (s *userservice) Signup(ctx context.Context, user model.User, password string) (int, error) {
	mailExists, err := s.repo.ExistsByEmail(ctx, user.Email)
	if err != nil {
		//log.Printf("signup error: %v", err)
		//return http.StatusInternalServerError, errors.New("Registration error")
		return 0, fmt.Errorf("service-Signup: check email existence: %w", err)
	}
	if mailExists {
		//return http.StatusConflict, errors.New("user already exists")
		return 0, fmt.Errorf("service-Signup: email already taken: %w", model.ErrEmailAlreadyExists)
	}

	phoneExists, err := s.repo.ExistsByPhonenumber(ctx, user.PhoneNumber)
	if err != nil {
		//log.Printf("signup error: %v", err)
		//return http.StatusInternalServerError, errors.New("Registration error")
		return 0, fmt.Errorf("service-Signup: check phone existence: %w", err)
	}
	if phoneExists {
		//return http.StatusConflict, errors.New("user already exists")
		return 0, fmt.Errorf("service-Signup: phone already taken: %w", model.ErrPhoneAlreadyExists)
	}

	// hash password
	hash, err := bcrypt.GenerateFromPassword(
		[]byte(password),
		bcrypt.DefaultCost,
	)
	if err != nil {
		//log.Printf("signup error: %v", err)
		//return http.StatusInternalServerError, errors.New("Registration error")
		return 0, fmt.Errorf("service-Signup: failed to generate hash: %w", err)
	}

	user.PasswordHash = string(hash)

	id, err := s.repo.CreateUser(ctx, user)
	if err != nil {
		return 0, fmt.Errorf("service-Signup: create user: %w", err)
	}

	return id, nil
}

func (s *userservice) Login(ctx context.Context, identifier string, password string) (*model.User, error) {
	user, err := s.repo.GetByEmailOrPhone(ctx, identifier)
	if err != nil {
		if errors.Is(err, model.ErrUserNotFound) {
			return nil, model.ErrInvalidCredentials
		}
		return nil, fmt.Errorf("service-Login: get user by email or phone number: %w", err)
	}

	err = bcrypt.CompareHashAndPassword(
		[]byte(user.PasswordHash),
		[]byte(password),
	)
	if err != nil {
		if errors.Is(err, bcrypt.ErrMismatchedHashAndPassword) {
			return nil, model.ErrInvalidCredentials
		}

		return nil, fmt.Errorf("service-Login: compare hash and password: %w", err)
	}

	return user, nil
}
