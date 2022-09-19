import axios from "axios"

export default class ProductService{
    url = "http://localhost:3001/products"

    getProducts(){
        return axios.get(this.url)
    }
}