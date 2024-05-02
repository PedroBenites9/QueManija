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
            console.log(Remera);
            return (
              <>
                <div className="products__card">
                  <ImagenesCard url={Remera.imagen} />
                  <div className="products__card-description">
                    <h2 className="products__title">{Remera.title}</h2>
                    <strong className="products__price">
                      ${Remera.precio}
                    </strong>
                    <p className="products__description">
                      {Remera.description}
                    </p>
                  </div>
                  <div className="products__card-button">
                    <ButtonColor color={remera} />
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
