import React, { useMemo } from "react";
import { styled } from "@stitches/react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import NavBar from "./header/NavBar";

const Head = styled("header", {});

const Header = () => {
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        {/* <Bar /> */}
        <NavBar />
      </Head>
    </ThemeProvider>
  );
};

export default Header;
