import axios from "axios"

export const api_gateway =
  process.env.NEXT_PUBLIC_API_GATEWAY || "http://localhost:8080"

export const api = axios.create({
  baseURL: api_gateway,
  headers: {
    "Content-Type": "application/json",
  },
})

export const login_url = `${api_gateway}/login?redirect_url=${encodeURIComponent(`${window.location.origin}/login/callback`)}`