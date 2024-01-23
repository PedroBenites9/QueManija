import React from "react";
import "../../css/App.css";

const Remeras = ({ remera }) => {
  return (
    <div className="card">
      {/* Aqui va la img con slider*/}
      {/* <Remera /> */}
      {remera.nameProduct === "Gorra" && (
        <img src={remera.img} alt={remera.nameProduct} />
      )}
      <h1>xd</h1>
      <h3>{remera.nameProduct}</h3>
      <p>${remera.price}</p>
    </div>
  );
};
const Gorras = ({ gorras }) => {
  return (
    <div className="card">
      {/* Aqui va la img con slider*/}
      {/* <Remera /> */}
      {gorras.nameProduct === "Gorra" && (
        <img src={gorras.img} alt={gorras.nameProduct} />
      )}
      <h1>xd</h1>
      <h3>{gorras.nameProduct}</h3>
      <p>${gorras.price}</p>
    </div>
  );
};

const CardProduct = (e) => {
  //   console.log(e.nameProduct);
  return (
    <>
      <Remeras remera={e} />
      <Gorras gorras={e} />
    </>
  );
};

export default CardProduct;
