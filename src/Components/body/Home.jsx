import "../../css/home.css";
import imgFondo from "../../img/fondoHome.png";

export function Home() {
  return (
    <div className="home">
      <img src={imgFondo} alt="" className="fondoHome" />
      <div className="home__text">
        <h3>Define tu estilo urbano</h3>
        <p>resalta ante el mundo </p>
        <p>simple o llamativo, es lo que vos finas</p>
        <button>que manija!</button>
      </div>
    </div>
  );
}
