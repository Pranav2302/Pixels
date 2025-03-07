import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { login as storeLogin } from "../authslice"
import { Button, Input, Logo } from "./index"
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from "react-hook-form"
import { useState } from 'react'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const login = async (data) => {
    setError("")
    setIsSubmitting(true)
    try {
      const session = await authService.login(data)
      if (session) {
        const userData = await authService.getcurrentUser()
        if (userData) dispatch(storeLogin(userData))
        navigate("/")
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md bg-card p-8 rounded-2xl shadow-card">
        <div className="text-center mb-8">
          <div className="inline-flex justify-center mb-4">
            <Logo width="70px" />
          </div>
          <h2 className="text-3xl font-bold text-textPrimary mb-2">Welcome back</h2>
          <p className="text-textSecondary">
            Enter your credentials to access your account
          </p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-danger/10 border border-danger/20 rounded-lg">
            <p className="text-danger text-center text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(login)} className="space-y-6">
          <div>
            <label className="text-sm font-medium text-textPrimary block mb-2">
              Email
            </label>
            <Input
              placeholder="name@example.com"
              type="email"
              className={`${errors.email ? 'border-danger focus:border-danger' : 'border-border'}`}
              {...register("email", {
                required: "Email is required",
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-danger">{errors.email.message}</p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-textPrimary">
                Password
              </label>
              <Link to="/" className="text-xs text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input
              type="password"
              placeholder="••••••••"
              className={`${errors.password ? 'border-danger focus:border-danger' : 'border-border'}`}
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-danger">{errors.password.message}</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 py-3 text-white font-medium"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-textSecondary">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-primary font-medium hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login