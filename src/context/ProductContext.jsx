import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [producto, setProducto] = useState([]);
  //   console.log(producto);
  const newCart = structuredClone(producto);

  const addToCart = (product) => {
    const productoInCartIndex = producto.findIndex(
      (item) => item.id === product.id
    );
    if (productoInCartIndex >= 0) {
      newCart[productoInCartIndex].cantidadProducto += 1;
      newCart[productoInCartIndex].stock -= 1;
      return setProducto(newCart);
    }

    setProducto((prevState) => [
      ...prevState,
      { ...product, cantidadProducto: 1 },
    ]);
  };

  const removeToCart = (product) => {
    const productoInCartIndex = producto.findIndex(
      (item) => item.id === product.id
    );
    // console.log(productoInCartIndex);
    if (newCart[productoInCartIndex].cantidadProducto > 1) {
      newCart[productoInCartIndex].cantidadProducto -= 1;
    }
    //* TODO: al llegar 0 en "cantidadProducto" se elimine el producto.
    // else {
    //   //   newCart[productoInCartIndex] = [];
    //   setProducto(newCart.splice(0, newCart));
    // }
    return setProducto(newCart);
  };
  const ClearCart = () => {
    setProducto([]);
  };

  const removeFromCart = (product) => {
    setProducto((prevState) =>
      prevState.filter((item) => item.id !== product.id)
    );
  };

  return (
    <ProductContext.Provider
      value={{
        producto,
        setProducto,
        addToCart,
        removeToCart,
        ClearCart,
        removeFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
