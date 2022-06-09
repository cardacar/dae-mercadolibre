import React from 'react'
import { NavLink } from 'react-router-dom'
import {AppBar, Box, Toolbar, Button, Grid} from '@mui/material'
import SearchInput from '../../components/SearchInput'

const NavBar = () => {
  return (
    <Grid container>
      <Grid item>
        <h1>Logo</h1>
      </Grid>
      <Grid item>
      <SearchInput/>
        
      </Grid>
      <Grid item>
        <h1>Promociones</h1>
      </Grid>

    </Grid>
  )
}

export default NavBar