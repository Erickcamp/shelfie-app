import React from "react";

const Product = ({
  product,
  product: { name, price, imgurl },
  deleteProduct,
  selectedHandler
}) => {
  return (
    <div>
      <div>Product</div>
      {`${name}
      ${price}
      ${imgurl}`}
      <button onClick={() => selectedHandler(product.id)}>Edit</button>
      <button onClick={() => deleteProduct(product.id)}>Delete</button>
    </div>
  );
};

export default Product;
