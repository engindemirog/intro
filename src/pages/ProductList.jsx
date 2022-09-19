import React, { useState, useEffect } from "react";
import ProductService from "../services/ProductService";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService.getProducts().then((result) => setProducts(result.data));
  },[]);
  return (
    <div>
      <div className="card">
        <DataTable value={products} responsiveLayout="scroll">
          <Column field="id" header="Id"></Column>
          <Column field="categoryId" header="Category Id"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="unitPrice" header="Unit Price"></Column>
        </DataTable>
      </div>
    </div>
  );
}
