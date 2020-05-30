import React from "react";

const Product = ({ product, product: { name, price, imgurl }, deleteProduct}) => {
  return (
    <div>
      <div>Product</div>
      {`${name}
      ${price}
      ${imgurl}`}
      <button>Edit</button>
      <button onClick={() => deleteProduct(product.id)}>Delete</button>
    </div>
  );
};

export default Product;
