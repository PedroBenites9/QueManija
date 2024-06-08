import ImagenesCard from "../../Card/ImagenesCard";
import "./cardProducto.css";
export function CardProducto({ producto }) {
  return (
    <div className="contenedor">
      <form className="card__contenedor">
        {producto.map((data) => (
          <div className="card">
            <ImagenesCard url={data.imagen} className="card__imagen" />
            <div className="card__product">
              <h3>{data.title}</h3>
              {/* <p>{data.description}</p> */}
              <span>${data.precio}</span>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}
