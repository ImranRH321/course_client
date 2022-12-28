import React from 'react';
import { useForm } from "react-hook-form";

const ProductOrderForm = () => {
    const { register, handleSubmit, reset, watch } = useForm();

    const onSubmit = data => {
        console.log(data);
        alert('cick')
        reset()
    }

    return (
        <div className='md:h-96 bg-red-400'>
            <h2 className='text-3xl text-white font-bold py-4'>Order From Details ! </h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid lg:grid-cols-3 lg:mt-5 md:grid-cols-2 gap-4 justify-center md:p-4"
            >
                <input
                    class="input input-bordered w-full max-w-xs font-bold text-1xl"
                    type="text"
                   placeholder='Your Name'
                />
                <input
                    class="input input-bordered w-full max-w-xs font-bold"
                    placeholder="Your email"
                    type="email"
            
                />
                <input
                    class="input input-bordered w-full max-w-xs font-bold mr-3"
                    placeholder="Your email"
                    type="email"
                    {...register("email")}
                />
                {/* quantity */}
                <input
                    class="input input-bordered w-full max-w-xs font-bold"
                    placeholder="quantity"
                    type="number"
                    {...register("quantity")}
                />
                <input
                    class="input input-bordered w-full max-w-xs"
                    placeholder="Your address"
                    type="text"
                    {...register("address")}
                    required
                />
                <div>
                    <input
                        class="input input-bordered w-full max-w-xs"
                        placeholder="Phone Number.."
                        type="number"
                        {...register("phone")}
                        required
                    />
                    <input
                        type="submit"
                        value="bookFrom"
                        class='input my-5 btn-warning text-dark font-bold text-2xl input-bordered max-w-xs w-full'
                    />
                </div>
            </form>
        </div>
    );
};

export default ProductOrderForm;