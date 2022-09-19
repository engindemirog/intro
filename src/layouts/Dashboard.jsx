import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import Navi from "./Navi";
import {Route,Routes} from "react-router-dom"
import ProductDetail from "../pages/ProductDetail";

export default function Dashboard() {
  return (
    <div class="grid">
      <div class="col-12">
        <Navi />
      </div>
      <div class="col-3">
        <Categories/>
      </div>
      <div class="col-9">
        <Routes>
          <Route exact path="/" element={<ProductList/>}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/products/detail/:id" element={<ProductDetail/>}/>
        </Routes>
      </div>
    </div>
  );
}
