import { createContext, useState } from "react";

export const ColorContext = createContext();

export function ColorRopaProvider({ children }) {
  const [colorRopa, setColorRopa] = useState({
    color: "#000",
    id: "1",
  });
  console.log(colorRopa);
  return (
    <ColorContext.Provider value={{ colorRopa, setColorRopa }}>
      {children}
    </ColorContext.Provider>
  );
}
