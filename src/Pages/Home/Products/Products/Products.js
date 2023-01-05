import React, { useEffect, useState } from "react";
import Filtering from "../Filtering/Filtering";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");

  /* 

          data.filter((items) => {
            if (value === "All") return items;
            return items.brand === value;
          })
*/

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [value]);

  return (
    <div className="my-10">
      <h1 className="text-3xl mx-auto text-primary my-5 w-[200px] font-bold font-[propine]">
        Servies rooms{" "}
      </h1>
      <div className="product_area grid md:grid-cols-2 md-grid-cols-4 lg:grid-cols-5  gap-5">
        {products
          .filter((product) => {
            return search.toLocaleLowerCase() === ""
              ? product
              : product.brand.toLocaleLowerCase().includes(search);
          })
          .slice(0, 10)
          .map((product) => (
            <Product key={product.key} product={product}></Product>
          ))}
      </div>
    </div>
  );
};

export default Products;
