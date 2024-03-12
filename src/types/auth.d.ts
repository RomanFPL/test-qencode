// Define types for your request payloads and API responses
export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  token_expire: string;
  refresh_token_expire: string;
}

export interface AccessTokenResponse {
  // Define the properties based on your actual API response
}

export interface RefreshTokenResponse {
  // Define the properties based on your actual API response
}

export interface PasswordResetResponse {
  detail: string;
  error: number;
}

export interface SetNewPasswordResponse {
  detail: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RefreshTokenRequest {
  refresh_token: string;
}

export interface SetNewPasswordRequest {
  token: string;
  secret: string;
  password: string;
}
