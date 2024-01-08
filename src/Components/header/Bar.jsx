import * as React from "react";
// MUI imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// MaterialUI imports
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Badge } from "@mui/material";
// styled imports
// Other imports
import MenuLeft from "./MenuLeft";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, width: "100vw" }}>
      <AppBar position="static">
        <Toolbar>
          <MenuLeft />

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <IconButton>
            <LocalShippingIcon />
          </IconButton>
          <IconButton>
            <Badge badgeContent={4} color="error">
              <ShoppingBagIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
