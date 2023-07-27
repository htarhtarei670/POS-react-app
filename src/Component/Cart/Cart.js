import { useContext } from "react";
import Context from "../store/Cart-context";
import Modal from "../UI/Modal";
import classes from "./Card.module.css"
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx=useContext(Context);

    //to get total amount
    const totalAmount=cartCtx.totalAmount.toFixed(2);

    //to check is order list has or not
    const isHasItem=cartCtx.item.length>0;

    //add and remove cart functions
    const addExistCart=(item)=>{
        //to increase cart amount
       cartCtx.addCart({...item,amount:1})
    }

    const removeExistCart=(id)=>{
        cartCtx.removeCart(id)
    }

    const cardItem=<ul className={classes["cart-items"]}>{
        cartCtx.item.map((item)=>
          <CartItem
            key={item.id}
            name={item.name} 
            price={item.price}
            amount={item.amount}
            onAdd={addExistCart.bind(null, item)}
            onRemove={removeExistCart.bind(null,item.id)}    
            />
        )
    }</ul>

    return (
        <Modal onHiden={props.onHide}>
            {cardItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>
                    ${totalAmount}
                </span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHide}>Close</button>
                {isHasItem && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}
export default Cart;