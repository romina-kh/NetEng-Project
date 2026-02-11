package model

import "errors"

type User struct {
	ID           int     `json:"id"`
	Name         string  `json:"name"`
	Family       string  `json:"family"`
	Email        string  `json:"email"`
	PhoneNumber  string  `json:"phone_number"`
	PasswordHash string  `json:"password"`
	Birthday     string  `json:"birthday"`
	Address      string  `json:"address"`
	Wallet       float64 `json:"wallet"`
	Avatar       string  `json:"avatar"`
}

var (
	ErrUserNotFound       = errors.New("user not found")
	ErrUserAlreadyExists  = errors.New("user already exists")
	ErrEmailAlreadyExists = errors.New("email already exists")
	ErrPhoneAlreadyExists = errors.New("phone already exists")
	ErrInvalidCredentials = errors.New("invalid credentials")
)
