import axios from "axios"

export default class ProductService{
    url = "http://localhost:3001/products"

    getProducts(){
        return axios.get(this.url)
    }

    getProductById(id){
        return axios.get(this.url+"/"+id)
    }
    
    add(product){
        return axios.post(this.url,product)
    }
}