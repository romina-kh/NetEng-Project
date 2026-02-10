package service

import (
	"context"
	"errors"
	"log"
	"net/http"

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
		log.Printf("signup error: %v", err)
		return http.StatusInternalServerError, errors.New("Registration error")
	}
	if mailExists {
		return http.StatusConflict, errors.New("user already exists")
	}

	phoneExists, err := s.repo.ExistsByPhonenumber(ctx, user.Email)
	if err != nil {
		log.Printf("signup error: %v", err)
		return http.StatusInternalServerError, errors.New("Registration error")
	}
	if phoneExists {
		return http.StatusConflict, errors.New("user already exists")
	}

	// hash password
	hash, err := bcrypt.GenerateFromPassword(
		[]byte(password),
		bcrypt.DefaultCost,
	)
	if err != nil {
		log.Printf("signup error: %v", err)
		return http.StatusInternalServerError, errors.New("Registration error")
	}

	user.PasswordHash = string(hash)


	if err := s.repo.CreateUser(ctx, user); err != nil {
		return http.StatusInternalServerError, err
	}

	return http.StatusCreated, nil
}


func (s *userservice) login(ctx context.Context, username string, password string) (int, error) {
	return 0, nil

}
