import { Fragment, useState } from "react";
/* import Products from "./pages/products/Products";
import ProductDetail from "./pages/productDetail/ProductDetail";
import { Switch, Route } from "react-router-dom"; */
import {InitialContext, initialState} from './context/Context'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import {Styles} from './assets/theme'
import Router from "./routes/Router";

function App() {

  const [productContext, setProductContext] = useState(initialState)
  return (
    <Fragment>
      <InitialContext.Provider value={{productContext, setProductContext}}>
        <ThemeProvider theme={Styles}>
        <CssBaseline/>
        <Router/>
        </ThemeProvider>
      </InitialContext.Provider>
    </Fragment>
  )
}

export default App;
