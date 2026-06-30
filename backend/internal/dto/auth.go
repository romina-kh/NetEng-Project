package dto

import "time"

type SignupRequest struct {
	Name        string     `json:"name" binding:"required"`
	Family      string     `json:"family" binding:"required"`
	Role        string     `json:"role" binding:"required"`
	Email       string     `json:"email"`
	PhoneNumber string     `json:"phone_number" binding:"required"`
	Password    string     `json:"password" binding:"required,min=8"`
	Birthday    *time.Time `json:"birthday"`
	Address     string     `json:"address" `
}

type SignupResponse struct {
	Message string `json:"message"`
}

type LoginRequest struct {
	Identifier string `json:"identifier" binding:"required"`
	Password   string `json:"password" binding:"required,min=8"`
}

type LoginResponse struct {
	Message string `json:"message"`
}

type ErrorResponse struct {
	Error string `json:"error"`
}
