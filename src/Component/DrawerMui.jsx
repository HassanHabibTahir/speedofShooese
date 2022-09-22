import React from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const DrawerMui = () => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  return (
    <>
      <IconButton size="large" onClick={() => setisDrawerOpen(true)}>
        <MenuIcon></MenuIcon>
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography>hhasdhasd</Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerMui;
