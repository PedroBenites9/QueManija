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
