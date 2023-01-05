import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {
  const { productId } = useParams({}); // user details single id
  const [productDetails, setProductDetails] = useState({});

  // useEffect(() => {
  //   fetch("/products.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const singleProduct = data.filter((el) => el._id == productId);
  //       setProductDetails(singleProduct[0]);
  //     });
  // }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log('detils', data);
        setProductDetails(data) 
      });
  }, [productId]);


  const {
    available,
    img,
    brand,
    category,
    color,
    colors,
    details,
    price,
    review,
    sku,
    star,
    title,
    _id,
  } = productDetails;




  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div class="img_container">
        <img
          className="w-full h-[400px]"
          src={img}
          alt="detailsPageImageLoading"
        />
      </div>
      <div class="pd_dt_container">
        <div className="card  bg-base-100">
          <div className="card-body">
            <h2 className="text-3xl my-0 font-[propine] ">
              product code: {brand}
            </h2>
            ,<p className="text-orange-300 text-2xl ">Price: {price}</p>
            <ReactStars
              count={star}
              size={28}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              color={"#EE8123"}
              activeColor={"#EE8123"}
            />
            <p className="text-primary">title: {title}</p>
            <p className="text-primary">available: {available}</p>
            <p className="text-primary">category: {category}</p>
            <p className="text-primary">sku: {sku}</p>
            {/* quanity  increament and decrement  */}
            <div>
              <Link
               
                to={`/productDetails/productOrderForm/${_id}`}
                className="btn btn-primary btn-md"
              >
                Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
