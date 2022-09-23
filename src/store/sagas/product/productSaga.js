import axios from "axios"
import {call,put} from "redux-saga/effects"
import { setProducts } from "../../actions/productActions";


async function getProducts(){
    try {
         const {data} = await axios.get("http://localhost:3001/products");
         console.log();
         return data;
    } catch (error) {
        console.log(error);
    }   
}

export function* handleGetProducts(){
    const products = yield call(getProducts)
    yield put(setProducts(products))
}

