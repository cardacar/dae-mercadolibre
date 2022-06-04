import "./App.css";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/productDetail/ProductDetail";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/items/:id">
        <ProductDetail />
      </Route>
      <Route path="/">
        <Products />
      </Route>
    </Switch>
  );
}

export default App;
