import React, { useState } from "react";
import { Input, Button } from "./index";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { login } from "../store/authSlice";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { handleSubmit, register } = useForm();

  const loginMethod = async (data) => {
    setError("");
    try {
      const userlogin = await authService.loginAccount(data);
      if (userlogin) {
        userData = await authService.authenticationState();
        if (userData) {
          dispatch(login(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="m-0 p-0 min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_140%,#FFFFFF_70%,#E7E7E7_80%,#B6B6B6_90%,#868686_100%)] flex justify-center items-center">
        <form
          className="h-140 w-135 rounded-4xl backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
          onSubmit={handleSubmit(loginMethod)}
        >
          <div className="flex flex-col items-center">
            <h1 className="text-center text-3xl font-bold mt-10 underline decoration-wavy text-emerald-950">
              Project Management System
            </h1>
            <p className="text-center text-2xl mt-5 font-semibold font-serif">
              Login Account
            </p>
            <p className="text-center text-xl mt-3 font-semibold font-stretch-ultra-expanded flex gap-1.5">
              Don't have an account?
              <Link
                className="hover:underline text-amber-900 font-medium cursor-pointer"
                to="/signup"
              >
                Sign up!
              </Link>
            </p>
            <p className="text-center px-10 mt-1 text-amber-800 h-15">
              {error}
            </p>
            <div className="flex flex-col flex-wrap items-center mt-5 gap-12">
              <Input
                label="Email"
                type="email"
                className="h-8 w-110 rounded-lg border text-lg border-gray-300/70 bg-white/50 px-4 py-3 text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-gray-500 focus:bg-white/70 focus:ring-2 focus:ring-gray-300/50"
                placeholder="ENTER THE EMAIL ADDRESS"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                      "Email address must be a valid address",
                  },
                })}
              />

              <Input
                label="Password"
                type="password"
                className="h-8 w-110 rounded-lg border text-lg border-gray-300/70 bg-white/50 px-4 py-3 text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-gray-500 focus:bg-white/70 focus:ring-2 focus:ring-gray-300/50"
                placeholder="ENTER THE PASSWORD"
                {...register("password", { required: true })}
              />
            </div>
            <Button
              name="Login"
              className="bg-blue-400 h-9 w-30 font-semibold font-serif rounded-xl mt-12 flex justify-center items-center tracking-widest"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
