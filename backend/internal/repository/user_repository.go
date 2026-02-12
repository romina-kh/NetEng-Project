package repository

import (
	"context"

	"github.com/romina-kh/NetEng-Project/backend/internal/model"
	"gorm.io/gorm"
)

type userRepository struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) UserRepository {
	return &userRepository{
		db: db,
	}
}

func (r *userRepository) CreateUser(ctx context.Context, user model.User) (int, error) {

	// query := `INSERT INTO users (name, family, email, phone_numner, password, birthday,
	// 		  address, wallet, avatar)
	// 		  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
	// 		  RETURNING id`

	// var id int

	// err := r.db.QueryRowContext(ctx, query, user.Name, user.Family, user.Email, user.PhoneNumber, user.PasswordHash,
	// 	user.Birthday, user.Address, user.Wallet, user.Avatar).Scan(&id)

	// if err != nil {
	// 	if isDuplicateError(err) {
	// 		return -1, fmt.Errorf("repo-CreateUser: query user %v: %w ", user.Name, model.ErrUserAlreadyExists)
	// 	}

	// 	return -1, fmt.Errorf("repo-CreateUser: failed to execute query for user %v: %w ", user.Name, err)
	// }

	// return id, nil

	return 0, nil

}

func (r *userRepository) ExistsByEmail(ctx context.Context, email string) (bool, error) {

	// query := `SELECT id FROM users WHERE email = $1`

	// var id int

	// err := r.db.QueryRowContext(ctx, query, email).Scan(&id)
	// if err != nil {
	// 	if err == sql.ErrNoRows {
	// 		return false, nil

	// 	} else {
	// 		return false, fmt.Errorf("repo-ExistByEmail: user with email %v: %w ", email, err)
	// 	}
	// }

	return true, nil
}

func (r *userRepository) ExistsByPhonenumber(ctx context.Context, phoneNumber string) (bool, error) {

	// query := `SELECT id FROM users WHERE phone_number = $1`

	// var id int

	// err := r.db.QueryRowContext(ctx, query, phoneNumber).Scan(&id)
	// if err != nil {
	// 	if err == sql.ErrNoRows {
	// 		return false, nil
	// 	}

	// 	return false, fmt.Errorf("repo-ExistByEmail: user with phone_number %v: %w ", phoneNumber, err)
	// }

	return true, nil
}
func (r *userRepository) GetByEmailOrPhone(ctx context.Context, identifier string) (*model.User, error) {

	// query := `SELECT * from users WHERE email = $1 OR phonenumber = $2`

	// var user model.User
	// err := r.db.QueryRowContext(ctx, query, identifier, identifier).Scan(
	// 	&user.ID,
	// 	&user.Name,
	// 	&user.Family,
	// 	&user.Email,
	// 	&user.PhoneNumber,
	// 	&user.PasswordHash,
	// 	&user.Birthday,
	// 	&user.Address,
	// 	&user.Wallet,
	// 	&user.Avatar,
	// )

	// if err != nil {
	// 	if err == sql.ErrNoRows {
	// 		return nil, fmt.Errorf("repo-GetByEmailOrPhone: user with %v: %w ", identifier, model.ErrUserNotFound)
	// 	}

	// 	return nil, fmt.Errorf("repo-GetByEmailOrPhone: failed to execute query for user with %v: %w ", identifier, err)
	// }

	// return &user, nil
	return nil, nil

}

// func isDuplicateError(err error) bool {
// 	if err == nil {
// 		return false
// 	}

// 	errorStr := err.Error()
// 	return strings.Contains(errorStr, "23505") ||
// 		strings.Contains(errorStr, "duplicate key") ||
// 		strings.Contains(errorStr, "already exists")
// }
