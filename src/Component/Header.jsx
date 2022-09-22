import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logoimg from "../Imgaes/logoImg.png";
import { Drawer, SwipeableDrawer } from "@mui/material";
import { useState } from "react";

// import Button from '@mui/material/Button';

const pages = ["Home", "WhitePaper ", "Staking", "Linktree"];

const Header = () => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", padding: "1rem" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={Logoimg}></img>
          </Typography>

          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}

          <Box
            className="App"
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItem: "center",
              width: "80%",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  fontWeight: "bolder",
                  marginLeft: "3rem",
                  padding: "1rem",
                  color: "#00336A",
                  borderBottom: "1px solid #F8F8F8",
                  "&:hover": {
                    color: "#74D7C9",
                    borderBottom: "1px solid #74D7C9",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
          >
            <Box>
              <img
                src={Logoimg}
                sx={{ marginLeft: "40px", textAlign: "center" }}
              ></img>
            </Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setisDrawerOpen(true)}
              color="inherit"
            >
              <MenuIcon sx={{ color: "#00336A", fontSize: "3rem" }} />
            </IconButton>
            <SwipeableDrawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setisDrawerOpen(false)}
            >
              <Box p={2} width="250px" textAlign="center" role="presentation">
                {pages.map((page) => (
                  <Button
                    key={page}
                    size="large"
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      display: "block",
                      fontWeight: "bolder",
                      marginLeft: "3rem",
                      padding: "1rem .5rem",
                      fontSize: "1.5rem",
                      color: "#00336A",
                      borderBottom: "1px solid #F8F8F8",
                      "&:hover": {
                        color: "#74D7C9",
                        borderBottom: "1px solid #74D7C9",
                      },
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </SwipeableDrawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
