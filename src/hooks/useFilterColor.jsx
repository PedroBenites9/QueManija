import { useContext } from "react";
import { ColorRopa } from "../Components/body/context/colorRopa";

export function useFilterColor() {
  const { colorRopa, setColorRopa } = useContext(ColorRopa);

  const filteredColor = (remeraColor) => {
    return remeraColor.filter((filterRemera) => {
      return filterRemera.color === colorRopa;
    });
  };
  return { filteredColor, setColorRopa, colorRopa };
}
