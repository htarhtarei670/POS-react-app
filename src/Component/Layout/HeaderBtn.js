import { useContext } from "react";
import classes from "./HeaderBtn.module.css"
import Context from "../store/Cart-context";
import { useEffect } from "react";
import { useState } from "react";


const HeaderBtn=(props)=>{
    const cartCtx=useContext(Context);

    // to get item total customer order
    const numberOfCartItem = cartCtx.item.reduce(
        (currValue, item) => currValue + item.amount,0
    );

    //animation for btn
    const [addBoundAni,setAddBoundAni]=useState(false);
    const btnClass=`${classes.button} ${addBoundAni ? classes.bump:""}`;

    //to add animation to btn every time I increase cart amount
    useEffect(()=>{
        if(cartCtx.item.length ===0){
            return;
        }
        setAddBoundAni(true);

        const timer=setTimeout(()=>{
            setAddBoundAni(false)
        },300);

        return (()=>{
            clearTimeout(timer)
        });
    },[cartCtx.item]);

    return(
     <>
        <button className={btnClass} onClick={props.onShown}>
            <span className={classes.icon}>
             <i class="fa-solid fa-cart-shopping"></i>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>{numberOfCartItem}</span>
        </button>
     </>   
    )
}
export default HeaderBtn;