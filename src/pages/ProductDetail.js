import React, { useState, useEffect,useRef } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/ProductService";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { Toast } from 'primereact/toast';

export default function ProductDetail() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const toast = useRef(null)
  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService.getProductById(id).then((result) => setProduct(result.data));
  }, []);

  const header = (
    <img
      alt="Card"
      src="images/usercard.png"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const footer = (
    <span>
      <Button
        label="Add To Cart"
        icon="pi pi-times"
        className="p-button-secondary ml-2"
        onClick={()=>handleAddToCart(product)}
      />
    </span>
  );

  const handleAddToCart = (product)=>{
      dispatch(addToCart(product))
      toast.current.show({severity:'success', summary:'Success', detail:'Added to cart', life:3000})
  }

  return (
    <div>
      <Toast ref={toast}/>
      <Card
        title={product.name}
        subTitle={product.unitPrice}
        style={{ width: "25em" }}
        footer={footer}
        header={header}
      >
        <p className="m-0" style={{ lineHeight: "1.5" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </Card>
    </div>
  );
}
