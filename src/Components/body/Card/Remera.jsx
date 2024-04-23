import "./remera.css";
import ImagenesCard from "./ImagenesCard";
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";
import { AddToCartIcon, RemoveFromCartIcon } from "../../Icon";

export default function Remera({ clothes }) {
  const { producto, addToCart, removeFromCart } = useContext(ProductContext);

  const checkProductInCart = (product) => {
    return producto.some((item) => item.id === product.id);
  };

  return (
    <>
      <main className="products">
        <ul>
          {clothes.map((remera) => {
            const isProductInCart = checkProductInCart(remera);
            return (
              <>
                <div className="products__card">
                  <h2>{remera.title}</h2>
                  <ImagenesCard url={remera.imagen} />
                  <p>{remera.precio}</p>
                  <div>
                    <button
                      onClick={() => {
                        isProductInCart
                          ? removeFromCart(remera)
                          : addToCart(remera);
                      }}
                    >
                      {isProductInCart ? (
                        <RemoveFromCartIcon />
                      ) : (
                        <AddToCartIcon />
                      )}
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </ul>
      </main>
    </>
  );
}
