import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const MenuLeft = () => {
  const [open, setOpen] = useState(false);
  const productsList = ["Remeras", "Gorras"];
  return (
    <div>
      <IconButton>
        <MenuIcon variant="contained" onClick={() => setOpen(true)} />
      </IconButton>

      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <List>
          {productsList.map((prodList) => (
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary={prodList} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default MenuLeft;
