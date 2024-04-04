import React from "react";
import style from "./Header.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Logo } from "../Image/Image";
const Header = () => {
  const drawerWidth = 240;
  const navItems = [
    "Find Doctors",
    "Hospitals",
    "Medicines",
    "Surgeries",
    "Software for Provider",
    "Facilities",
  ];

  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState("one");
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleMenu = (value) => {
    console.log(value);
    setValue(value);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Logo />
      </Typography>
      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            onClick={() => handleMenu(item)}
            disablePadding
            value={item}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              {value === item ? (
                <ListItemText primary={item} sx={{ color: "blue" }} />
              ) : (
                <ListItemText primary={item} value={item} />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  // window?: () => Window;
  // const container =
  //   window !== undefined ? () => Window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        background: "transparent",
      }}
    >
      <CssBaseline />
      <AppBar component="nav" className={style.AppBar}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          >
            <Logo />
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
              textColor="primary"
              indicatorColor="primary"
            >
              {navItems.map((item) => (
                <Tab
                  key={item}
                  sx={{ color: "#102851" }}
                  value={item}
                  label={item}
                />
              ))}
            </Tabs>
          </Box>

          <button className="login-btn">Login</button>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
