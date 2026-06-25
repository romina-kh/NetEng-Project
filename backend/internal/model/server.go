package model

import "errors"

type Server struct {
	ServerNumber uint    `json:"id"`
	IP           string  `json:"ip"`
	Picture      string  `json:"picture"`
	Price        float64 `json:"price"`
	OS           string  `json:"os"`
	Storage      string  `json:"storage"`
}

var (
	ErrServerNotFound = errors.New("server not found")
)
