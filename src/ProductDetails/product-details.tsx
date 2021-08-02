import React, {useEffect, useState} from "react";
import fetch from "../AxiosHelper/axios-helper";
import './product-details.css'
import store from "../redux/store";
import {useParams
} from "react-router-dom";
import Cart from "../Cart/cart";
import {connect, useDispatch} from "react-redux";


const ProductDetails = () => {
    let params:{id:string}  = useParams();
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const [product,setProduct] = useState({
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
    });

    useEffect(() => {
        getProducts().then(x => {// @ts-ignore
            setProduct({...x.data.product});});
    },[])

    const getProducts = async () => {
        return await fetch(`front-end/product/${params.id}/`, '', 'get')
    }
    const addtoCart = () => {
       dispatch({
            type:"ADD",
            payload: product
        })
        console.log("dispatch",store.getState())
        localStorage.setItem("cart",product.toString());
    }
    return(
        // @ts-ignore
        <div>
            <button  onClick={e => {
                setShow(show => !show);
            }}
            > cart </button>
            <Cart show={show}/>
            <div className="goodCardImageContainer">
                <div  style={{
                    // @ts-ignore
                    backgroundImage: `url(${product.images.main})`,
                }} className="goodCardImage"/>
                <div>{product.title}</div>
                <div style={{textDecoration:'line-through'}} >قیمت قبل:{product.price.rrp_price}تومان</div>
                <div>قیمت تخفیفی:{product.price.selling_price} تومان </div>
                <button onClick={() => addtoCart()}>افزودن به سبد خرید</button>
            </div>
        </div>

    )
}
export default ProductDetails;
