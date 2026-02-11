package dto

type SignupRequest struct {
	Name        string `json:"name" binding:"required"`
	Family      string `json:"family" binding:"required"`
	Email       string `json:"email" binding:"required"`
	PhoneNumber string `json:"phone_number" binding:"required"`
	Password    string `json:"password" binding:"required,min=8"`
	Birthday    string `json:"birthday" binding:"required"`
	Address     string `json:"address" binding:"required"`
}

type SignupResponse struct {
	Token   string `json:"token"`
	Message string `json:"message"`
}

type LoginRequest struct {
	Identifier string `json:"identifier" binding:"required"`
	Password   string `json:"password" binding:"required,min=8"`
}

type LoginResponse struct {
	Token   string `json:"token"`
	Message string `json:"message"`
}

type ErrorResponse struct {
	Error string `json:"error"`
}
