import React from "react";
import { useNavigate } from "react-router-dom";
import {FaSearch} from "react-icons/fa"

const Product = ({ product }) => {
  // console.log(product);
  const { img, brand, price, _id } = product;
  const navigate = useNavigate();

  const makeProductParam = (id) => {
    navigate(`/products/${id}`);
  };

  console.log(img); 
  console.log(brand); 
  return (
   <div>
     <div
      onClick={() => makeProductParam(_id)}
      className="card md-[w-96] bg-base-100 shadow-xl hover:cursor-pointer   hover:opacity-50 hover:border-emerald-900 border  hover:relative"
    >
      <figure>
        <img className="h-[250px] sm-[w-96] " src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
         
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="flex justify-center gap-5 font-bold">
          <div className="p-0 m-0">
            <span className=""> {brand}</span>
          </div>
          <div className="p-0 m-0">
            <span className="">Price: {price}</span>
          </div>
        </div>
        <p 
        className=" "
        >
        <FaSearch className="absolute top-1/2 left-1/2 hover:transform -translate-x-1/2 -translate-y-1/2 hover:fs-5"/> icon sdfsfsf
      </p>
      </div>
    </div>
     
   </div>
  );
};

export default Product;
