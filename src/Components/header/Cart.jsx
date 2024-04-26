import { useContext, useId } from "react";
import "./cart.css";
import { ClearCartIcon } from "../Icon.jsx";
import { Badge } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { ProductContext } from "../../context/ProductContext.jsx";
function CartItem({
  title,
  cantidadProducto,
  precio,
  addToCart,
  removeToCart,
  color,
}) {
  return (
    <li>
      <img src="" alt="" />
      <div>
        <strong>{title}</strong>-${precio}
        <p>Color: {color}</p>
      </div>
      <footer>
        <button onClick={removeToCart}>-</button>
        <small>{cantidadProducto}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}
export function Cart() {
  const cartCheckboxId = useId();
  const { producto, addToCart, removeToCart, ClearCart } =
    useContext(ProductContext);

  return (
    <>
      <label htmlFor={cartCheckboxId} className="cart-button">
        <Badge badgeContent={producto.cantidadCarrito} color={"error"}>
          <ShoppingBagIcon />
        </Badge>
      </label>

      <input type="checkbox" name="" id={cartCheckboxId} hidden />
      {/* agregar animacion al carrito */}
      <aside className="cart slide-left">
        <ul>
          {producto.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              addToCart={() => addToCart(product)}
              removeToCart={() => removeToCart(product)}
            />
          ))}
        </ul>
        <button onClick={ClearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
