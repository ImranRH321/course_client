import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../../firebase/firebase.init";
import {  useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
  // google 
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
// login email vs password 
const [
  signInWithEmailAndPassword,
  euser,
  eloading,
  eerror,
] = useSignInWithEmailAndPassword(auth);

 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password)
    console.log(data);
  };

  if( eloading || gloading){
    return <h1>loading.....</h1>
  }
  


  if(euser || guser) {
    console.log(euser || guser);
  }


  return (
    <div className="flex py-20  mt-20 justify-center items-center hero bg-blue-400">
      <div className="card w-96 bg-blue-400 text-white shadow-xl border-red-400">
        <div className="card-body">
          <h2 className="text-center text-5xl font-bold text-warning font-[propine] font-bold text-5xl font-bold">
            Login
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs text-black"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-900">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs text-black"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                  pattern: {
                    value: /(?=.*\W)/,
                    message: "At least one digit,",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-1xl text-red-700 font-bold">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {/* {setError} */}
            <input
              className="rounded py-2 cursor-pointer shadow mt-2 w-full text-2xl max-w-xs bg-blue-600 hover:bg-blue-700 capitalize text-white"
              type="submit"
              value="Login"
            />
          </form>
          <p className="mt-3 text-black">
            Create A new Account
            <Link
              className="btn btn-xs mx-2 text-accent capitalize"
              to="/register"
            >
              Register
            </Link>
          </p>

          <div class="divider text-black">OR</div>

          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-warning mx-auto  text-2xl"
          >
            {/* <i class="fa-brands fa-google"></i> */}
           Google
          </button>
          <div>
            <label className="label">
              <a
                href="#"
                className="text-primary label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
