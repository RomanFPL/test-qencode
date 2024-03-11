import axios, { AxiosResponse } from "axios";
import {
  AccessTokenResponse,
  LoginRequest,
  LoginResponse,
  PasswordResetResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  SetNewPasswordRequest,
  SetNewPasswordResponse,
} from "../types/auth";

const apiClient = axios.create({
  baseURL: "https://auth-qa.qencode.com/v1/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function loginUser(
  credentials: LoginRequest
): Promise<LoginResponse> {
  try {
    const response: AxiosResponse<LoginResponse> = await apiClient.post(
      "/login",
      credentials
    );
    return response.data;
  } catch (error) {
    throw new Error((error as any).response.data.detail || "Failed to login");
  }
}

export async function getAccessToken(
  bearerToken: string
): Promise<AccessTokenResponse> {
  try {
    const response: AxiosResponse<AccessTokenResponse> = await apiClient.post(
      "/access-token",
      null,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to refresh access token");
  }
}

export async function refreshAccessToken(
  requestData: RefreshTokenRequest
): Promise<RefreshTokenResponse> {
  try {
    const response: AxiosResponse<RefreshTokenResponse> = await apiClient.post(
      "/refresh-token",
      requestData
    );
    return response.data;
  } catch (error) {
    throw new Error(
      (error as any).response.data.detail || "Failed to refresh token"
    );
  }
}

export async function resetPassword(
  email: string
): Promise<PasswordResetResponse> {
  try {
    const response: AxiosResponse<PasswordResetResponse> = await apiClient.post(
      "/password-reset",
      { email }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      (error as any).response.data.detail || "Failed to reset password"
    );
  }
}

export async function setNewPassword(
  requestData: SetNewPasswordRequest
): Promise<SetNewPasswordResponse> {
  try {
    const response: AxiosResponse<SetNewPasswordResponse> =
      await apiClient.post("/password-set", requestData);
    return response.data;
  } catch (error) {
    throw new Error(
      (error as any).response.data.detail || "Failed to set new password"
    );
  }
}
