import './good-card.css'
import React from "react";
import store from "../redux/store";
const MyGoodCard = (prop:any) => {
    const addToCart = () => {
        store.dispatch({
            type:"ADD",
            payload: prop
        })
        localStorage.setItem("cart",JSON.stringify(prop.id));
    }

    const RenderImage = () => {
        return (
            <div className="goodCardImageContainer">
                <div
                    style={{
                        backgroundImage: `url(${prop.images.main})`,
                    }}
                    className="goodCardImage"
                />
            </div>
        );
    };

    return (
        <div className="goodCardContainer">
            <a  href={`http://localhost:3000/product/${prop.id}`}>
                <RenderImage />
                <div className="goodCardDescription">{prop.price.selling_price}</div>
            </a>
            <button onClick={() => addToCart()}>افزودن به سبد خرید</button>
        </div>

    );
}
export default MyGoodCard;
