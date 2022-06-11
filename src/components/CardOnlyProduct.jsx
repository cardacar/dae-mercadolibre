import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const CardOnlyProduct = ({product}) => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: "800px",
        flexGrow: 1,
        backgroundColor: '#fff',
      }}
      elevation={0}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: "500px", height: "500px" }}>
            <Img alt={product.pictures ? product.pictures[0].id : "https://dummyimage.com/500x500/000/fff"} src={product.pictures ? product.pictures[0].url: "https://dummyimage.com/500x500/000/fff"} />
          </ButtonBase>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default CardOnlyProduct