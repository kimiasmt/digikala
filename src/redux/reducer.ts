import store from "./store";
interface Product {
    id:"",
    images:{
        main:""
    },
    price:{
        rrp_price:0,
        selling_price:0,
    },
    rating:{count:0,
        reate:0},
    status:"marketable",
    title:""
}
let initialState : {
    products:Product[]
} = {
    products : []
}
const reducer = (state= initialState,action:any) => {
    switch (action.type) {
        case "ADD" :
            return {
                ...state,products: [...state.products,action.payload]
            }
        default:
            return state
    }
};
export default reducer;
