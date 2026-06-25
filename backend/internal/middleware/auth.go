package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/romina-kh/NetEng-Project/backend/internal/dto"
	utility "github.com/romina-kh/NetEng-Project/backend/internal/utils"
)

func JWTAuth() gin.HandlerFunc {
	return func(c *gin.Context) {
		token, err := c.Cookie("auth_token")

		if err != nil {
			c.AbortWithStatusJSON(http.StatusUnauthorized, dto.ErrorResponse{
				Error: "authentication cookie required",
			})
			return
		}

		if token == "" {
			c.AbortWithStatusJSON(http.StatusUnauthorized, dto.ErrorResponse{
				Error: "authorization cookie required",
			})
			return
		}

		claims, err := utility.ParseJwtToken(token)
		if err != nil {
			c.AbortWithStatusJSON(http.StatusUnauthorized, dto.ErrorResponse{
				Error: "invalid or expired token",
			})
			return
		}

		c.Set("user_id", claims.UserID)

		c.Next()
	}
}
