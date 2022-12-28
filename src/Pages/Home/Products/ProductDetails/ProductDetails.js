import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const ProductDetails = () => {
    const { productId } = useParams({}) // user details single id
    const [productDetails, setProductDetails] = useState({})

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                const singleProduct = data.filter(el => el._id == productId)
                setProductDetails(singleProduct[0])
            })
    }, [])

    const { available, img, brand, category, color, colors, details, price, review, sku, star, title, _id } = productDetails;


    return (
        <div className='grid md:grid-cols-2 gap-4'>
            <div class="img_container">
                <img className="md:[w-420px] md:[252px]" src={img} alt="detailsPageImageLoading" />
            </div>
            <div class="pd_dt_container">

                <div className="card  bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title">name: {brand}</h2>
                        <p>title: {title}</p>
                        <p>available: {available}</p>
                        <p>category: {category}</p>
                        <p>color: {color}</p>
                        <p>star: {star}</p>
                        <p>sku: {sku}</p>
                         {/* quanity  increament and decrement  */}
                         <div>
                          <Link to="/productDetails/productOrderForm" className='btn btn-primary'>Order</Link>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;









