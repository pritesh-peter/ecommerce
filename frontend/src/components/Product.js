import React from "react";
import Rating from "./Rating";

function Product(props) {
  const {product} = props;
  console.log("single product", product);
  return (
    <div key={product._id} className="card">
      <a href={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt="" />
      </a>
      <div className="card-body">
        <a href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
        <Rating rating={product.rating} numReviews={product.numReviews} />
      </div>
      <div className="price">${product.price}</div>
    </div>
  );
}

export default Product;
