import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../../firebase/firebase.init";
import { ToastContainer, toast } from 'react-toastify';

const ProductOrderForm = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const date = new Date().toDateString();
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const productsData = data.find((el) => el._id == id);
        setProducts(productsData);
      });
  }, []);

  const navigate = useNavigate()


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  
    const userBookingData = {
      name: user?.displayName,
      userEmail: user.email,
      productId: id,
      address: data.address,
      phone: data.phone,
      quaity: data?.quantity,
      date: date,
      productName: products?.brand,
      price: products?.price,
      category: products?.category,
    };
 
    console.log(products);

    fetch("http://localhost:5000/orderBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",   
      },
      body: JSON.stringify({ userBookingData }),
    })
      .then((response) => response.json())
      .then((data) => {
         if(data.insertedId){
          toast.success('bokking successfully')
          navigate('/')
         }
      });

    reset();
  };
  return (
    <div className="w-50 mx-auto text-white bg-black-500  ">
      <h2 className="text-4xl my-10 text-center text-blue-500">
        booking room ! {id}
      </h2>
      <div className="divider text-primary">!!</div>
      <div className="card   text-primary">
        <div className="card-body">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid md:grid-cols-1 items-center justify-items-center my-5   "
          >
            <input
              placeholder="name"
              value={user?.displayName}
              className="disabled input bg-red-200 w-full max-w-xs mb-5"
            />
            <input
              placeholder="name disbled "
              value={user?.email}
              className="disabled input bg-red-200 w-full max-w-xs"
            />

            {/* quantity  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text-alt">quantiy</span>
              </label>
              <input
                type="number"
                placeholder="quantity"
                className="input input-bordered w-full max-w-xs"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "quantity is required",
                  },
                  maxLength: {
                    value: 500,
                    message: " minLength  quantiy 500", // JS only: <p>error message</p> TS only support string
                  },
                  minLength: {
                    value: 1,
                    message: "min  qunanity 1", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.quantity?.type === "required" && (
                  <p className="text-red-500" role="alert">
                    {errors.quantity.message}
                  </p>
                )}
                {errors.quantity?.type === " maxLength" && (
                  <p className="text-red-500" role="alert">
                    {errors.quantity.message}
                  </p>
                )}
                {errors.quantity?.type === " minLength" && (
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
                  },
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
                type="tel"
                placeholder="phone"
                className="input input-bordered w-full max-w-xs"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "phone is required",
                  },
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
            <br />

            <input className="btn btn-success w-1/3 text-left" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductOrderForm;
