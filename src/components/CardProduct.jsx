import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getProductById } from "../service/mercadolibreService";

const CardProduct = ({ product, setAllDataResults, /* setOnlyProduct */ }) => {
/*   const history = useHistory() */

/*   const searchProduct = (idProduct) => {
    history.push(`/items/${idProduct}`)
    setAllDataResults([])
  } */

/*   const searchOnlyProduct = (productId) => {
    getProductById(productId).then(res => setOnlyProduct(res.data))
    setAllDataResults([])
  } */
  
  return (
    <Card sx={{ display: "flex", margin: "1rem", width: "100%", cursor: 'pointer' }} onClick={() => console.log(product.id)}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={`${product.thumbnail}`}
        alt={`${product.title}`}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ width: "100%" }}>
          <Typography component="div" variant="h5">
            {product.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
            }).format(product.price)}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardProduct;
