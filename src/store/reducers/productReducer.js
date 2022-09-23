import { SET_PRODUCTS } from "../actions/productActions";

const initialState = [];

const productReducer = (state=initialState, {type,payload})=>{
    switch (type) {
        case SET_PRODUCTS:
            return payload;
        default:
            return state;
    }
}

export default productReducer;