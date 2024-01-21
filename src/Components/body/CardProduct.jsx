import React from "react";
import "../../css/App.css";

const CardProduct = (e) => {
  console.log(e);

  return (
    <>
      <div className="card">
        {/* Aqui va la img con slider*/}
        <img src="" alt="imagenxD" />
        <h3>Product title</h3>
        <p>price</p>
      </div>
    </>
  );
};

export default CardProduct;
