import { createContext, useState } from "react";

export const colorContext = createContext();

export function ColorRopa({ children }) {
  const [colorRopa, setColorRopa] = useState({
    ropaClothe: "#000",
  });

  return (
    <colorContext.Provider value={{ colorRopa, setColorRopa }}>
      {children}
    </colorContext.Provider>
  );
}
