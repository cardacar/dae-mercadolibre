import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Product from "../pages/products/Products";
import ProductDetail from "../pages/productDetail/ProductDetail";
import NavBar from "../layouts/NavBar/NavBar";

const Router = () => {
  return (
    <Fragment>
      <header
        style={{
          backgroundColor: "#fff159",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <NavBar />
        <h3>categorias</h3>
      </header>
      <section>
        <Routes>
          <Route path="/admin" element={<Product />} />
          <Route path="/" element={<ProductDetail />} />
        </Routes>
      </section>
    </Fragment>
  );
};

export default Router;
