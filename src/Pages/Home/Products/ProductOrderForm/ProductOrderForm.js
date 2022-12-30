// import React from "react";
// import { useForm } from "react-hook-form";

// const ProductOrderForm = () => {
//   const { register, handleSubmit, reset, watch } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     alert("cick");
//     reset();
//   };

//   return (
//     <div className=" bg-red-400 ">
//       <h2 className="text-3xl text-white font-bold py-4">
//         Order From Details !{" "}
//       </h2>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         // className="grid lg:grid-cols-3 lg:mt-5 md:grid-cols-2 gap-4 justify-center md:p-4"
//         className="flex flex-col   items-cetner text-center items-center  border"
//       >
//         <input
//           class="input text-end input-bordered w-full max-w-xs font-bold text-1xl border"
//           type="text"
//           placeholder="Your Name"
//         />
//         <input
//           class="input text-end input-bordered w-full max-w-xs font-bold"
//           placeholder="Your email"
//           type="email"
//         />
//         <input
//           class="input  input-bordered w-full max-w-xs font-bold mr-3"
//           placeholder="Your email"
//           type="email"
//           {...register("email")}
//         />
//         {/* quantity */}
//         <input
//           class="input input-bordered w-full max-w-xs font-bold"
//           placeholder="quantity"
//           type="number"
//           {...register("quantity")}
//         />
//         <input
//           class="input input-bordered w-full max-w-xs"
//           placeholder="Your address"
//           type="text"
//           {...register("address")}
//           required
//         />
//         <input
//           class="input input-bordered w-full max-w-xs"
//           placeholder="Phone Number.."
//           type="number"
//           {...register("phone")}
//           required
//         />
//         <input
//           type="submit"
//           value="bookFrom"
//           class="input my-5 btn-warning text-dark font-bold text-2xl input-bordered max-w-xs w-full"
//         />
//       </form>
//     </div>
//   );
// };

// export default ProductOrderForm;

/* ============ */
import React from "react";
import { useForm } from "react-hook-form";

const ProductOrderForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-4xl text-primary">product roder ferom</h2>

      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
          <input
                type="text"
                placeholder="name disbled"
                className="input input-bordered w-full max-w-xs"
               
              />
             {/* email filed */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text-alt">email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required now",
                  },

                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    {errors.email.message}
                  </p>
                )}

                {errors.email?.type === "pattern" && (
                  <p className="text-red-400" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </label>
            </div>
            {/*password filed */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text-alt">password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered w-full max-w-xs"
                {...register("password",{
                  required: {
                    value: true,
                    message: 'password is required',
                  },
                  minLength: {
                    value: 6 ,
                    message: 'mast be 6 charecter'
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/,
                    message:"atleast 1 uppercase 1 lowercase and 1 number",
                  }
                })}
              />

              <label className="label">
                {errors.password?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    {errors.password.message}
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500" role="alert">
                    {errors.password.message}
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500" role="alert">
                    {errors.password.message}
                  </p>
                )}

              </label>
            </div>
            {/* quantity  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text-alt">email</span>
              </label>
              <input
                type="number"
                placeholder="quantity"
                className="input input-bordered w-full max-w-xs"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "quantity is required",
                  }
                })}
              />
              <label className="label">
                {errors.quantity?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    {errors.quantity.message}
                  </p>
                )}
              </label>
            </div>
            {/* address  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text-alt">address</span>
              </label>
              <input
                type="text"
                placeholder="address"
                className="input input-bordered w-full max-w-xs"
                {...register("address", {
                  required: {
                    value: true,
                    message: "address is required",
                  }
                })}
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    {errors.address.message}
                  </p>
                )}
              </label>
            </div>
            {/* phone  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text-alt">phone</span>
              </label>
              <input
                type="text"
                placeholder="phone"
                className="input input-bordered w-full max-w-xs"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "phone is required",
                  }
                })}
              />
              <label className="label">
                {errors.phone?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </label>
            </div>
            <input className="btn" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductOrderForm;
