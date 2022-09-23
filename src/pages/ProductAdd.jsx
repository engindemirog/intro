import React from 'react'
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'primereact/button';
import ProductService from '../services/ProductService';

export default function ProductAdd() {
  const initialValues = {name:"", unitPrice:10};

  const schema = Yup.object({
    name:Yup.string().required("Ürün ismi zorunlu"),
    unitPrice:Yup.number().required("Ürün fyatı zorunludur")
  });

  return (
    <Formik 
    initialValues={initialValues} 
    validationSchema={schema}
    onSubmit= {(values)=>{
        let productService = new ProductService();
        productService.add(values).then(data=>{})
    }}
    >
     <Form>
        <Field type="text" name="name" placeholder="product name">
        </Field>
        <ErrorMessage name='name'></ErrorMessage>
        <Field type="number" name="unitPrice" placeholder="unit price">
        </Field>
        <ErrorMessage name='unitPrice'></ErrorMessage>
        <button type='submit'>Add</button>
     </Form>
    </Formik>
  )
}
