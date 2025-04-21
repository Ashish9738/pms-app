"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/providers/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { Sparkle } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { casdoorClientId, casdoorEndpoint, casdoorSignUpRedirectURL, googleClientId, googleRedirectURL } from "@/lib/const"

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="mr-2 size-5">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
)

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

const signUpURL = `${casdoorEndpoint}/signup/oauth/authorize?client_id=${casdoorClientId}&response_type=code&redirect_uri=${casdoorSignUpRedirectURL}&scope=read&state=events`

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const { login } = useAuth()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const router = useRouter()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      await login({
        username: values.email,
        password: values.password,
      })
      router.back()
    } catch (error) {
      setErrorMessage("Invalid email or password")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* <Nav /> */}
      <main className="container mx-auto mt-[100px] max-w-[400px] px-4 py-8 md:my-[200px]">
        <div className="relative mb-4 flex flex-col items-center gap-4 md:m-0 md:flex-row">
          <div>
            <h1 className="text-center text-2xl font-bold mb-3">
              Sign in to Swedney
            </h1>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>
            {errorMessage && (
              <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
            )}
          </form>
        </Form>
        <div className="mt-4 flex items-start justify-end">
          <Link
            href="/auth/forgot-password"
            className="text-sm text-gray-500 hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background text-muted-foreground px-2">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex w-full flex-col gap-2">
            <Button
              variant="outline"
              className="flex w-full items-center justify-center"
              onClick={() => {
                window.location.href = `https://accounts.google.com/signin/oauth?client_id=${googleClientId}&redirect_uri=${googleRedirectURL}&scope=profile+email&response_type=code&state=casdoor`
              }}
            >
              <GoogleIcon />
              Continue with Google
            </Button>
          </div>
        </div>
        <p className="text-muted-foreground mt-6 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href={signUpURL} className="underline">
            Sign up
          </Link>
        </p>
      </main>
      {/* <Footer /> */}
    </div>
  )
}