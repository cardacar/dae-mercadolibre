import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Divider } from "@mui/material";
import { InitialContext } from "../context/Context";
import { formatNumber } from "../utils/formatNumber";
import { getProductById } from "../service/mercadolibreService";
import { useNavigate } from "react-router-dom";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const NewCardProduct = ({ item }) => {
  const { productContext, setProductContext } = useContext(InitialContext);
  let navigate = useNavigate()

  const searchOnlyProduct = (item) => {
    getProductById(item.id).then((res) => {
      setProductContext({ ...productContext, detailProduct: res.data });
    });
    navigate(`/product/${item.title}`)
  };

  return (
    <Paper
      sx={{
        p: 2,
        maxWidth: 700,
        flexGrow: 1,
        backgroundColor: "#fff",
      }}
      elevation={0}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase
            sx={{ width: "160px", height: "160px" }}
            onClick={() => searchOnlyProduct(item)}
          >
            <Img
              alt={`${item ? item.title : "Imagen"}`}
              src={`${
                item ? item.thumbnail : "https://dummyimage.com/160x160/000/fff"
              }`}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
                onClick={() => searchOnlyProduct(item)}
                sx={{ cursor: "pointer" }}
              >
                {`${item ? item.title : "Titulo no disponible"}`}
              </Typography>
              <Typography variant="h5" color="text.primary">
                {item ? formatNumber(item.price) : "Precio no disponible"}
              </Typography>
            </Grid>
            {/* <Grid item>
              <Typography variant="body2">
                ranking
              </Typography>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </Paper>
  );
};

export default NewCardProduct;
