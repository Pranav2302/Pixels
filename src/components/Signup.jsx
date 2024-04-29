import React,{ useState } from 'react'
import {useForm} from "react-hook-form"
import authService from '../appwrite/auth'
import {Link,useNavigate} from "react-router-dom"
import {login} from "../authslice"
import { useDispatch } from 'react-redux'
import { Button,Input,Logo } from "./index";

function Signup() {
    const navigate = useNavigate()
     const dispatch = useDispatch();
     const { register, handleSubmit } = useForm();
     const [error, setError] = useState("");
      const create = async (data) => {
        setError("");
        try {
          const userData = await authService.accountRecreation(data);
          if (userData) {
            const userData = await authService.getcurrentUser();
            if (userData) dispatch(login(userData));
            navigate("/");
          }
        } catch (error) {
          setError(error.message);
        }
      };
  return (
    <div className="flex items-center justify-center ">
      <div
        className={`mx-auto w-full max-w-lg bg-lightgrey rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight text-white">
          Sign up to create pixels account
        </h2>
        <p className="mt-2 text-center text-base text-white/50">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
                validate: {
                  matchPattern: (val) =>
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
                      val
                    ) ||
                    "at least 8 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, Can contain special characters",
                },
              })}
            />
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup
