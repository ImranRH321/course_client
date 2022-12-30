import { async } from "@firebase/util";
import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase/firebase.init";
import Loading from "../../Sheard/Footer/Loading";

const Register = () => {
  // google
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  //  email password flied
  const [createUserWithEmailAndPassword, cuser, cloading, cerror] =
    useCreateUserWithEmailAndPassword(auth);

  // update frofile
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }, 
  } = useForm();

  let navigate = useNavigate();

  const onSubmit = async (data) => {
    //  em / pw
    createUserWithEmailAndPassword(data.email, data.password);
    // up df
    const success = await updateProfile({ displayName: data.name });
    if (success) {
      alert("Updated profile");
    }
  };

  if (cloading || gloading) {
    return <Loading></Loading>;
  }

  let googleError;

  if (gerror || cerror) {
    googleError = (
      <p className="text-red-700 font-[propine]">
        {gerror?.message || cerror?.message}
      </p>
    );
  }

  if (cuser || guser) {
    navigate('/')
  }

  return (
    <div className="flex py-20  mt-20 justify-center items-center hero bg-green-500">
      <div className="card w-96 bg-green-500 text-white shadow-xl border-red-400 hover:bg-green-400 ">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-black text-5xl font-bold text-4xl">
            Register
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">username</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs text-black"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
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
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {/*  */}

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
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
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {googleError}
            <input
              className="btn btn-primary w-full max-w-xs btn-dark capitalize text-white "
              type="submit"
              value="Register"
            />
          </form>
          <p className="mt-3 text-black">
            Create A new Account
            <Link
              className="btn btn-xs mx-2 text-accent capitalize"
              to="/login"
            >
              Login
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-warning mx-auto  text-2xl"
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
