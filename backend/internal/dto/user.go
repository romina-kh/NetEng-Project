package dto

import "time"

type MeResponse struct {
	Name         string     `json:"name"`
	Family       string     `json:"family"`
	Email        string     `json:"email"`
	PhoneNumber  string     `json:"phone"`
	PasswordHash string     `json:"password_hash"`
	Birthday     *time.Time `json:"birthday"`
	Address      string     `json:"address"`
	Avatar       string     `json:"avatar"`
}

type EditProfileRequest struct {
	Name        string     `json:"name"`
	Family      string     `json:"family"`
	Email       string     `json:"email"`
	PhoneNumber string     `json:"phone"`
	Birthday    *time.Time `json:"birthday"`
	Address     string     `json:"address"`
	Avatar      string     `json:"avatar"`
}

type EditProfileResponse struct {
	Message string `json:"message"`
}
