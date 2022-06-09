import React, { Fragment } from 'react'
import { Routes, Route} from 'react-router-dom'
import Product from '../pages/products/Products'
import ProductDetail from '../pages/productDetail/ProductDetail'
import NavBar from '../layouts/NavBar/NavBar'

const Router = () => {
  return (
    <Fragment>
        <header style={{backgroundColor: "red"}}>
            <h1>Header</h1>
            <NavBar/>
        </header>
        <section>

        <Routes>
            <Route path="/" element={<Product/>}/>
            <Route path='/product/:detail' element={<ProductDetail/>}/>
        </Routes>
        </section>
        <footer>
        <h1>Footer</h1>
        </footer>
    </Fragment>
  )
}

export default Router