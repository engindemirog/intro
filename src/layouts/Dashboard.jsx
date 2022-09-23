import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import Navi from "./Navi";
import {Route,Routes} from "react-router-dom"
import ProductDetail from "../pages/ProductDetail";
import ReduxTest from "../pages/ReduxTest";
import ProductAdd from "../pages/ProductAdd";
import NotFound from "../pages/NotFound";
import ProductList2 from "../pages/ProductList2";

export default function Dashboard() {
  return (
    <div class="grid">
      <div class="col-12">
        <Navi />
      </div>
      <div class="col-3">
        <Categories title="Categories" someOtherData="1"/>
      </div>
      <div class="col-9">
        <Routes>
          <Route exact path="/" element={<ProductList/>}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/products2" element={<ProductList2/>}/>
          <Route path="/products/detail/:id" element={<ProductDetail/>}/>
          <Route path="/reduxtest" element={<ReduxTest/>}/>
          <Route path="/productadd" element={<ProductAdd/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
  );
}
