import React, {  useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getProducts } from "../store/actions/productActions";

export default function ProductList2() {
  const products = useSelector(state=>state.products)  
  const navigator = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  const handleGotoDetail =(event) =>navigator(`/products/detail/${event.data.id}`)

  return (
    <div>
      <div className="card">
        <DataTable value={products} responsiveLayout="scroll" onRowClick={handleGotoDetail}>
          <Column field="id" header="Id"></Column>
          <Column field="categoryId" header="Category Id"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="unitPrice" header="Unit Price"></Column>
        </DataTable>
      </div>
    </div>
  );
}