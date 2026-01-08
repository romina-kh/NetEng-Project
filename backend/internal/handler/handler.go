package handler

import "github.com/romina-kh/NetEng-Project/backend/internal/service"

type Handler struct {
	service *service.Service
}

func NewHandler(service *service.Service) *Handler {
	return &Handler{service: service}
}
