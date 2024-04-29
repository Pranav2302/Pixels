import React from 'react'
import  {Link,useNavigate} from "react-router-dom"
import {login as storeLogin} from "../authslice"
import {Button,Input,Logo} from "./index"
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from "react-hook-form"
import { useState } from 'react'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit}=useForm()
    const [error,setError] = useState("")
    const login=async (data) =>{
        setError("")
        try {
          const session = await authService.login(data)
          if (session) {
            const userData=await authService.getcurrentUser()
            if(userData) dispatch(storeLogin(userData))
            navigate("/")
        }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight text-white">
          Sign in to your pixels
        </h2>
        <p className="mt-2 text-center text-base text-white/50">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          {/* handlesubmit is from useForm , it is a key word ,and we have to given a method which is use to login*/}
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter the Email"
              type="email"
              {...register("email", {
                //imp - to not overwrite the values we use (...) register  and to give name "email" is unique .this is key value
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
                validate: {
                  //this is regex use for validation the format
                  matchPattern: (val) =>
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
                      val
                    ) ||
                    "at least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, Can contain special characters",
                },
              })}
            />
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login
