import { createContext, useState } from "react";

export const ColorContext = createContext();

export function ColorRopaProvider({ children }) {
  const [colorRopa, setColorRopa] = useState({
    color: "#FFD1DC",
    id: "1",
  });

  return (
    <ColorContext.Provider value={{ colorRopa, setColorRopa }}>
      {children}
    </ColorContext.Provider>
  );
}
