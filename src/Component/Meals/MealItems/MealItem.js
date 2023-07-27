import { useContext } from "react";
import Context from "../../store/Cart-context";
import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"

const MealIten=(props)=>{
    //to use context file
    const cartCtx=useContext(Context);

    const price=`$ ${props.price.toFixed(2)}`;

    //to get user entered item
    const getEnterUserItem=(amount)=>{
        cartCtx.addCart({
            id:props.id,
            name:props.name,
            price:props.price,
            amount:amount
        })
    }   
    return(
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <MealItemForm id={props.id} onAddCart={getEnterUserItem}/>
    </li>)
}
export default MealIten;