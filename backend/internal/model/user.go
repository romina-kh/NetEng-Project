package model

import "errors"

type User struct {
	Name         string  
	ID           int     
	Family       string  
	Email        string  `gorm:"uniqueIndex"`
	PhoneNumber  string  `gorm:"uniqueIndex"`
	PasswordHash string  
	Birthday     string  
	Address      string  
	Wallet       float64 
	Avatar       string  
}

var (
	ErrUserNotFound       = errors.New("user not found")
	ErrUserAlreadyExists  = errors.New("user already exists")
	ErrEmailAlreadyExists = errors.New("email already exists")
	ErrPhoneAlreadyExists = errors.New("phone already exists")
	ErrInvalidCredentials = errors.New("invalid credentials")
)
