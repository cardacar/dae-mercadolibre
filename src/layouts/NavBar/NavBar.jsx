import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Box, Toolbar, Button, Grid } from "@mui/material";
import SearchInput from "../../components/SearchInput";

const NavBar = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        paddingTop: "0.3rem",
        paddingLeft: "10rem",
        paddingRight: "8rem",
        boxSizing: "border-box",
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={2}>
        <h1>Logo</h1>
      </Grid>
      <Grid item xs={6}>
        <SearchInput />
      </Grid>
      <Grid item xs>
        <h1>Promociones</h1>
      </Grid>
    </Grid>
  );
};

export default NavBar;
