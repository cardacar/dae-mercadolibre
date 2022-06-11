import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {formatNumber} from '../utils/formatNumber'

const InfoProduct = ({product}) => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: '#fff',
      }}
      elevation={0}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h5" component="div">
                {product ? product.title : "Titulo"}
              </Typography>
              <Typography variant="body2" gutterBottom>
              {product ? formatNumber(product.price) : "Precio"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Estado: {product ? product.status : "Status"}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Ciudad: {product.seller_address ? product.seller_address.city.name : "Ciudad"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default InfoProduct