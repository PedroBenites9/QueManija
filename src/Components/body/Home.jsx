import "../../css/home.css";
import imgFondo from "../../img/fondoHome.png";

export function Home() {
  return (
    <section className="home">
      <div className="home__contenedor">
        <img src={imgFondo} alt="" className="fondoHome" />
        <div className="home__text">
          <h3>Define tu estilo urbano</h3>
          <p>resalta ante el mundo </p>
          <p>simple o llamativo, es lo que vos definas</p>
          <button className="button-37">que manija!</button>
        </div>
      </div>
    </section>
  );
}
