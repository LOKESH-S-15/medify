import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
const Footer = () => {
  const [value, setValue] = React.useState("one");
  const navItems = [
    "Find Doctors",
    "Hospitals",
    "Medicines",
    "Surgeries",
    "Software for Provider",
    "Facilities",
  ];
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  console.log(value);
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
        textColor="primary"
        indicatorColor="primary"
      >
        {navItems.map((item) => (
          <Tab key={item} sx={{ color: "black" }} value={item} label={item} />
        ))}
      </Tabs>
    </Box>
  );
};

export default Footer;
