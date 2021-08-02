import store from "../redux/store";
import MyGoodCard from "../GoodCard/good-card";
import React from "react";
import {useSelector} from "react-redux";
import './cart.css'
const Cart = (props:any) => {
    const data = useSelector((state:any) => state.products)
    let outPut : Array<JSX.Element> = [];
    if(data){
        outPut = [];
        data.forEach((good:any)=>{
            outPut.push(<div>{good.title}</div>)
        });
        console.log(outPut)
    }

    return(
        <div>
            {props.show?
                <div className="container">
                    {outPut}
                </div>:<div></div>
            }
           {/*<button onClick={()=> props.show = false}>x</button>*/}
        </div>


    )

}
export default Cart;
