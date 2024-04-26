import { useFilterColor } from "../../../hooks/useFilterColor";

export function ButtonColor({ color }) {
  const { setColorRopa } = useFilterColor();

  const handleChangeColor = (colorClothe) => {
    setColorRopa(colorClothe);
  };
  return (
    <div>
      {color.map((colorButton, id) => (
        <button
          key={id}
          onClick={() => handleChangeColor(colorButton)}
          style={{
            backgroundColor: colorButton.color,
            width: "30px",
            height: "30px",
            borderRadius: "50%",
          }}
        ></button>
      ))}
    </div>
  );
}
