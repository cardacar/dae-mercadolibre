import React, { Fragment, useState, useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { getAllProducts } from "../../service/mercadolibreService";
import CardProduct from "../../components/CardProduct";
import { InitialContext } from "../../context/Context";
/* import CardOnlyProduct from "../../components/CardOnlyProduct"; */
import {Grid} from '@mui/material'

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    //paddingRight: "5px",
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Products = () => {
  const {productContext, setProductContext} = useContext(InitialContext)
  const [input, setInput] = useState("");
  const [allDataResults, setAllDataResults] = useState([]);
/*   const [onlyProduct, setOnlyProduct] = useState({}) */

  const searchProduct = (searchProductName) => {
    /* setAllDataResults([])
    setAllDataResults([]) */
    getAllProducts(searchProductName).then((res) =>{
        //console.log(res.data.results)
      setAllDataResults(res.data.results)
    }
    );
  };

  

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Search>
              <StyledInputBase
                placeholder="Buscar producto"
                value={input}
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button color="secondary" onClick={() => searchProduct(input)}>Buscar</Button>
            </Search>
            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </AppBar>
      </Box>
      {allDataResults.length > 0 ? (
          <Grid container spacing={2} sx={{marginTop: '2rem'}}>
              {allDataResults.map((product, index)=> (
              <Grid item key={index}>
                  <CardProduct product={product} setAllDataResults={setAllDataResults} /* setOnlyProduct={setOnlyProduct} *//>
              </Grid>
              ))}
          </Grid>
      ) : null}
      {/* {onlyProduct.length > 0 ? (
      <Fragment>
        <CardOnlyProduct product={onlyProduct}/>
      </Fragment>
      ) : null} */}
    </Fragment>
  );
};

export default Products;
