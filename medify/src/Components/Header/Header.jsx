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
import { Navigate, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = ({ selectedTab }) => {
  const drawerWidth = 240;
  const navItems = [
    "Find Doctors",
    "Hospitals",
    "Medicines",
    "Surgeries",
    "Facilities",
  ];

  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState(selectedTab);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    const pathname = `/${newValue}`;

    if (newValue === "Find Doctors") {
      navigate(pathname);
    }

    setValue(newValue);
  };
  const handleMenu = (value) => {
    const pathname = `/${value}`;
    if (value === "Find Doctors") navigate(pathname);
    setValue(value);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to={`/`}>
          {" "}
          <Logo />
        </Link>
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

  const HeaderStyle = (selectedTab) => {
    console.log(selectedTab);
    if (selectedTab) {
      return {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        backgroundImage: "none",
      };
    } else {
      return {
        display: "flex",
        justifyContent: "space-between",
        background: "transparent",
      };
    }
  };
  return (
    <Box className={style.nav}>
      <CssBaseline />
      <AppBar
        component="nav"
        className={style.AppBar}
        sx={{ backgroundImage: "none" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="#2AA7FF"
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
            <Link to={`/`}>
              {" "}
              <Logo />
            </Link>
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
                  sx={{ color: "#102851", fontSize: "14px" }}
                  value={item}
                  label={item}
                />
              ))}
            </Tabs>
          </Box>

          <Button
            variant="contained"
            className={style.BookinBtn}
            color="primary"
          >
            {" "}
            My Booking
          </Button>
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
