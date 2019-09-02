package root

type User struct {
	id        string
	user_name string
	password  string
}

type UserService interface {
	CreateUser(u *User) error
	GetByUsername(username string) (*User, error)
}
