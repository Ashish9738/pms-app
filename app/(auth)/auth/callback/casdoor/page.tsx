/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Suspense, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from "@/providers/auth"

function CasdoorCallback() {
  const { casdoorLogin } = useAuth()
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const code = searchParams.get("code")
    const state = searchParams.get("state")

    const handleLogin = async () => {
      try {
        await casdoorLogin(code ?? "", state ?? "")
        router.push("/")
      } catch (e) {
        console.error(e);
    }
    }
    handleLogin()
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="size-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
        <p className="text-lg text-gray-600">Authenticating...</p>
      </div>
    </div>
  )
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CasdoorCallback />
    </Suspense>
  )
}