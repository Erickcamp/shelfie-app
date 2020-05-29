import React from "react";

const Product = ({ product: { name, price, imgurl } }) => {
  return (
    <div>
      <div>Product</div>
      {`${name}
      ${price}
      ${imgurl}`}
    </div>
  );
};

export default Product;
