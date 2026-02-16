package model

import "errors"

type Server struct {
	ServerNumber uint
	IP           string
	Picture      string
	Price        float64
	OS           string
	Storage      string
}

var (
	ErrServerNotFound = errors.New("server not found")
)
