import React, { Fragment, useContext, useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { InitialContext } from "../../context/Context";
import CardOnlyProduct from "../../components/CardOnlyProduct";
import InfoProduct from "../../components/InfoProduct";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductDetail = () => {
  const { productContext } = useContext(InitialContext);

  useEffect(() => {
    console.log(productContext.detailProduct);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productContext.detailProduct]);

  return (
    <Fragment>
      <Paper
      sx={{
        p: 2,
        margin: 'auto',
        marginTop: "20px",
        marginLeft:"5rem",
        marginRight: "5rem",
        flexGrow: 1,
        backgroundColor: '#fff',
      }}
    >

      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Item>Imagenes pequeñas</Item>
        </Grid>
        <Grid item xs={5}>
          <CardOnlyProduct product={productContext.detailProduct}/>
        </Grid>
        <Grid item xs>
          <InfoProduct product={productContext.detailProduct}/>
        </Grid>
        <Grid item xs={2}>
          <Item>Informacion de compra</Item>
        </Grid>
      </Grid>
      </Paper>
    </Fragment>
  );
};

export default ProductDetail;
