import React, { Fragment, useState, useContext, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { InitialContext } from "../../context/Context";
/* import CardOnlyProduct from "../../components/CardOnlyProduct"; */
import { Grid, Paper } from "@mui/material";
import NewCardProduct from "../../components/NewCardProduct";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Products = () => {
  const { productContext } = useContext(InitialContext);
  const [allDataResults, setAllDataResults] = useState([]);

  useEffect(() => {
    if (productContext.allProducts.length > 0) {
      setAllDataResults(productContext.allProducts)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDataResults, productContext.allProducts]);

  return (
    <Fragment>
      <Grid
        container
        spacing={3}
        sx={{ paddingLeft: "10rem", marginTop: "1px", width: "100%", height: "100%" }}
      >
        <Grid item xs={3}>
          <Box sx={{ flexGrow: 1 }}>
            <Item>Filtros</Item>
          </Box>
        </Grid>
        <Grid item xs={8}>
          {allDataResults.length > 0 ? (
            allDataResults.map((item, index)=><NewCardProduct item={item} key={index}/>)
          ) : null}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Products;
