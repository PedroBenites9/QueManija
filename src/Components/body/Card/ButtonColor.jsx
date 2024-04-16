import { useFilterColor } from "../../../hooks/useFilterColor";

export function ButtonColor({ color }) {
  const { setColorRopa } = useFilterColor();

  const handleChangeColor = (colorClothe) => {
    setColorRopa(colorClothe);
  };
  return (
    <>
      {color.map((colorButton, id) => (
        <button
          key={id}
          onClick={() => handleChangeColor(colorButton)}
          style={{ backgroundColor: colorButton.color }}
        >
          boton
        </button>
      ))}
    </>
  );
}
