import React from "react";
import { useNavigate } from "react-router-dom";
import {  Grid } from "@mui/material";
import SearchInput from "../../components/SearchInput";

const NavBar = () => {
  let navigate = useNavigate()

  const goToHome = () => {
    navigate("/")
  }

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
        <h1 onClick={()=> goToHome()} style={{cursor: "pointer"}}>Logo</h1>
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
