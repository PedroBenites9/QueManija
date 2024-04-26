import { useContext } from "react";
import { ColorContext } from "../context/ColorRopa";

export function useFilterColor() {
  const { colorRopa, setColorRopa } = useContext(ColorContext);
  const filterColor = (remera) => {
    return remera.filter((remeraFiltrada) => {
      return remeraFiltrada.color === colorRopa.color;
    });
  };
  return { filterColor, colorRopa, setColorRopa };
}
