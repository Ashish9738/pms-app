"use client"

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"

import {
  casdoorTokenExchange,
  googleTokenExchange,
  regularLogin,
} from "@/lib/api/client"

interface User {
  id: string
  email: string
  displayName: string
  avatar: string
  createdTime: string
  emailVerified: boolean
  firstName: string
  lastName: string
  gender: string
  isDefaultAvatar: boolean
  language: string
  phone: string
  region: string
  title: string
  type: string
  updatedTime: string
}

interface AuthContextType {
  user: User | null
  login: ({
    username,
    password,
  }: {
    username: string
    password: string
  }) => Promise<void>
  googleLogin: (code: string, state: string) => Promise<void>
  casdoorLogin: (code: string, state: string) => Promise<void>
  logout: () => void
}

function decodeToken(token: string): User | null {
  try {
    const [, payloadBase64] = token.split(".")
    const payloadJson = atob(payloadBase64)
    const payload = JSON.parse(payloadJson)

    return {
      id: payload.sub,
      email: payload.email,
      displayName: payload.displayName,
      avatar: payload.avatar,
      createdTime: payload.createdTime,
      emailVerified: payload.emailVerified,
      firstName: payload.firstName,
      lastName: payload.lastName,
      gender: payload.gender,
      isDefaultAvatar: payload.isDefaultAvatar,
      language: payload.language,
      phone: payload.phone,
      region: payload.region,
      title: payload.title,
      type: payload.type,
      updatedTime: payload.updatedTime,
    }
  } catch (error) {
    console.error("Error decoding token:", error)
    return null
  }
}

function isTokenExpired(token: string): boolean {
  try {
    const [, payloadBase64] = token.split(".")
    const payloadJson = atob(payloadBase64)
    const payload = JSON.parse(payloadJson)
    return payload.exp && payload.exp * 1000 < Date.now()
  } catch {
    return true
  }
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const logout = useCallback(() => {
    localStorage.removeItem("swedney_token")
    setUser(null)
  }, [])

  const checkTokenExpiration = useCallback(() => {
    const token = localStorage.getItem("swedney_token")
    if (!token) return null

    if (isTokenExpired(token)) {
      // console.log("Token expired, logging out")
      logout()
      return null
    }

    return decodeToken(token)
  }, [logout])

  useEffect(() => {
    const decodedUser = checkTokenExpiration()
    setUser(decodedUser)

    const interval = setInterval(checkTokenExpiration, 60000)
    return () => clearInterval(interval)
  }, [checkTokenExpiration])

  const login = useCallback(
    async ({ username, password }: { username: string; password: string }) => {
      const loginResp = await regularLogin(username, password)
      const token = loginResp.data.data.access_token
      localStorage.setItem("swedney_token", token)
      const decodedUser = decodeToken(token)
      setUser(decodedUser)
    },
    []
  )

  const googleLogin = useCallback(async (code: string, state: string) => {
    const googleResp = await googleTokenExchange(code, state)
    const token = googleResp.data.data.access_token
    localStorage.setItem("swedney_token", token)
    const decodedUser = decodeToken(token)
    setUser(decodedUser)
  }, [])

  const casdoorLogin = useCallback(async (code: string, state: string) => {
    const casdoorResp = await casdoorTokenExchange(code, state)
    const token = casdoorResp.data.data.access_token
    localStorage.setItem("swedney_token", token)
    const decodedUser = decodeToken(token)
    setUser(decodedUser)
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, casdoorLogin, login, googleLogin, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}