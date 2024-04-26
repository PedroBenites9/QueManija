import "./remera.css";
import ImagenesCard from "./ImagenesCard";
import { useContext, useState } from "react";
import { ProductContext } from "../../../context/ProductContext";
import { AddToCartIcon, RemoveFromCartIcon } from "../../Icon";
import { ButtonColor } from "./ButtonColor";
import remeras from "../../../Mocks/ropa.json";
export default function Remera({ clothes }) {
  const { producto, addToCart, removeFromCart } = useContext(ProductContext);
  const [remera] = useState(remeras.remeras);
  const checkProductInCart = (product) => {
    return producto.some((item) => item.id === product.id);
  };

  return (
    <>
      <main className="products">
        <ul>
          {clothes.map((Remera) => {
            const isProductInCart = checkProductInCart(Remera);
            return (
              <>
                <div className="products__card">
                  <h2>{Remera.title}</h2>
                  <ImagenesCard url={Remera.imagen} />
                  <div>
                    <strong>${Remera.precio}</strong>
                    <p>{Remera.description}</p>
                  </div>
                  <ButtonColor color={remera} />
                  <div>
                    <button
                      onClick={() => {
                        isProductInCart
                          ? removeFromCart(Remera)
                          : addToCart(Remera);
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
