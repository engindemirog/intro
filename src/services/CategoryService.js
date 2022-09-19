import axios from "axios"

export default class CategoryService{
    url = "http://localhost:3001/categories"

    getCategories(){
        return axios.get(this.url)
    }
}