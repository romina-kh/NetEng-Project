package dto

type SignupRequest struct {
	Name 		string	`json:"name" binding:"required"`
	Family 		string	`json:"family" binding:"required"`
	Email 		string 	`json:"email" binding:"required"`
	PhoneNumber string  `json:"phone_number" binding:"required"`
	Password	string	`json:"password" binding:"required,min=8"`
	Birthday	string	`json:"birthday" binding:"required"`
	Address		string	`json:"address" binding:"required"`
}
