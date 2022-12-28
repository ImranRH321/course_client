import React, { useEffect, useState } from 'react';
import Filtering from '../Filtering/Filtering';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [value, setValue] = useState("")
    console.log(value, 'value');

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='md:flex gap-10'>
            <div className='Search_area basis-1/3'>
                <Filtering setSearch={setSearch} setValue={setValue}></Filtering>
            </div>
            <div className='product_area grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.filter(product => {
                        return search.toLocaleLowerCase() === "" ? product : product.brand.toLocaleLowerCase().includes(search)
                    }).map(product => <Product key={product.key} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;





