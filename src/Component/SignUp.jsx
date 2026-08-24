import React from 'react'
import {Input,Button} from "./index";

function SignUp() {
  return (
    <div className="m-0 p-0 min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_140%,#FFFFFF_70%,#E7E7E7_80%,#B6B6B6_90%,#868686_100%)] flex justify-center items-center">
          <form className="h-140 w-135 rounded-4xl backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <div className="flex flex-col items-center">
              <h1 className="text-center text-3xl font-bold mt-10 underline decoration-wavy text-emerald-950">
                Project Management System
              </h1>
              <p className="text-center text-2xl mt-5 font-semibold font-serif">
                Create Account
              </p>
              <p className="text-center text-xl mt-3 font-semibold font-stretch-ultra-expanded flex gap-1.5">
                Already have an account?
                {/* TODO: P replace with Link */}
                <p
                  className="hover:underline text-amber-900 font-medium cursor-pointer"
                  to="/Login"
                >
                  Login!
                </p>
              </p>
              {/* TODO: Error replace */}
              <p className="text-center px-10 mt-1 h-15">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                quos, id iusto a quam nobis dolores aliqu.
              </p>
              <div className="flex flex-col flex-wrap items-center mt-2 gap-5">
                <Input
                  label="Name"
                  type="text"
                  className="h-8 w-110 rounded-lg border text-lg border-gray-300/70 bg-white/50 px-4 py-3 text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-gray-500 focus:bg-white/70 focus:ring-2 focus:ring-gray-300/50"
                  placeholder="ENTER YOUR NAME"
                />

                <Input
                  label="Email"
                  type="email"
                  className="h-8 w-110 rounded-lg border text-lg border-gray-300/70 bg-white/50 px-4 py-3 text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-gray-500 focus:bg-white/70 focus:ring-2 focus:ring-gray-300/50"
                  placeholder="ENTER THE EMAIL ADDRESS"
                />

                <Input
                  label="Password"
                  type="password"
                  className="h-8 w-110 rounded-lg border text-lg border-gray-300/70 bg-white/50 px-4 py-3 text-gray-900 outline-none transition duration-200 placeholder:text-gray-400 focus:border-gray-500 focus:bg-white/70 focus:ring-2 focus:ring-gray-300/50"
                  placeholder="ENTER THE PASSWORD"
                />
              </div>
              <Button
                name="Sign up"
                className="bg-blue-400 h-9 w-30 font-semibold font-serif rounded-xl mt-8 flex justify-center items-center tracking-widest"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
  )
}

export default SignUp