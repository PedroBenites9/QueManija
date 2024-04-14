import "./remera.css";
import ImagenesCard from "./ImagenesCard";

export default function Remera({ clothes }) {
  return (
    <>
      <main className="products">
        {clothes.map((remera) => (
          <div className="products__card">
            <h2>{remera.title}</h2>
            <ImagenesCard url={remera.imagen} />
            <p>{remera.precio}</p>
          </div>
        ))}
      </main>
    </>
  );
}
