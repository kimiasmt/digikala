import React, {useEffect, useState} from "react";
import './products-list.css'
import fetch from '../AxiosHelper/axios-helper'
import MyGoodCard from "../GoodCard/good-card";
import Cart from "../Cart/cart";

const ProductsList = () => {
    const [products,setProducts] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getProducts().then(x => {// @ts-ignore
            setProducts([...x.data.products]);console.log(products);});
    },[])

    const getProducts = async () => {
         return await fetch('front-end/search/?price[min]=1000&price[max]=10000000', '', 'get')
    }

    const RenderCardsSection =() => {
        const outPut : Array<JSX.Element> = [];
        if(products){
            products.forEach((good)=>{
                outPut.push(<MyGoodCard {...good}/>)
            });
        }
        return(
            <div className="goodsPageCardsOnly">
                {outPut}
            </div>)
    }

    return (
        <div className="goodsPageContainer">
            <button  onClick={e => {
                setShow(show => !show);
            }}
            > cart</button>
            <Cart show={show}/>
            <RenderCardsSection/>
        </div>)

}
export default ProductsList;
