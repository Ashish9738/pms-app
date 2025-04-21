import axios from "axios"
import { appBaseURL } from "../const"

export const apiClient = axios.create({
  baseURL: `${appBaseURL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
})

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("swedney_token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export function regularLogin(username: string, password: string) {
  return apiClient.post<{
    data: {
      access_token: string
    }
  }>(
    "/auth/login",
    { username, password }
  )
}

export function googleTokenExchange(code: string, state: string) {
  return apiClient.post<{
    data: {
      access_token: string
    }
  }>(
    "/auth/google/token-exchange",
    { code, state }
  )
}

export function casdoorTokenExchange(code: string, state: string) {
  return apiClient.post<{
    data: {
      access_token: string
    }
  }>(
    "/auth/casdoor/token-exchange",
    { code, state }
  )
}

export function linkedinTokenExchange(code: string, state: string) {
  return apiClient.post<{
    data: {
      access_token: string
    }
  }>(
    "/auth/linkedin/token-exchange",
    { code, state }
  )
}