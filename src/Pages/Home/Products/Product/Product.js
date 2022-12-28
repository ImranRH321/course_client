import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  // console.log(product);
  const { img, brand, price, _id } = product;
  const navigate = useNavigate();

  const makeProductParam = (id) => {
    alert("click me");
    navigate(`/products/${id}`);
  };


  

  return (
    <div
      onClick={() => makeProductParam(_id)}
      className="card md-[w-96] bg-base-100 shadow-xl hover:border-neutral-800"
    >
      <figure>
        <img className="h-[250px] sm-[w-96]" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Ro!
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
      </div>
    </div>
  );
};

export default Product;
