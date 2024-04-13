import React, { useMemo } from "react";
import "./css/App.css";
import Header from "./Components/Header";
import "./css/normalize.css";
import Body from "./Components/Body";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import Footer from "./Components/Footer";

const App = () => {
  const darkModeToggle = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkModeToggle ? "dark" : "light",
        },
      }),
    [darkModeToggle]
  );

  //* hacer que el carousel obtenga la data pero desde useContext
  //* rediseñar card y estructurar el mismo
  //* mejorar la logica y el uso de los componetes
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Body />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
