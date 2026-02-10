package model

type User struct {
	ID				string	`json:"id"`
	Name 			string	`json:"name"`
	Family 			string	`json:"family"`
	Email 			string 	`json:"email"`
	PhoneNumber		string  `json:"phone_number"`
	PasswordHash	string	`json:"password"`
	Birthday		string	`json:"birthday"`
	Address			string	`json:"address"`
	Wallet			float64	`json:"wallet"`
	Avatar			string 	`json:"avatar"`
}