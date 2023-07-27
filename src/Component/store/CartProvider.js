import { useReducer } from "react";
import Context from "./Cart-context";

const cartReducer=(state,action)=>{
    if(action.type==="add cart"){
        //to get exist cart index
        const existCartIndex=state.item.findIndex((item)=>
            item.id === action.item.id
        )

        const existCartItem=state.item[existCartIndex];

        //if existCartItem exist this is working
        let updateItem;
        let updateItems;
        if(existCartItem){
            updateItem={
                ...existCartItem,
                 amount: existCartItem.amount + action.item.amount,
            }
            updateItems=[...state.item];
            updateItems[existCartIndex]=updateItem;
        }else{
            updateItems = state.item.concat(action.item); 
        }
        
        //to update total amount
        const updateTotalAmount=state.totalAmount + (action.item.price *  action.item.amount); 

        return {
            item: updateItems,
            totalAmount: updateTotalAmount,
        };
    }

    if(action.type==="remove cart amount"){
        const existCartIndex=state.item.findIndex((item)=>
            item.id === action.id
        );
        const existCartItem=state.item[existCartIndex];
        const totalAmount=state.totalAmount -existCartItem.price

        let updateItems;
        if(existCartItem.amount ===1){
            //if exist cart's amount is 1,when we click minus btn ,we'll get empty array so when cart's amount is 0 this cart will auto remove from cart list
            updateItems = state.item.filter((item) => item.id !== action.id);
            
        }else{
            const updateItem = { ...existCartItem, amount: existCartItem.amount - 1 };
            updateItems = [...state.item];
            updateItems[existCartIndex] = updateItem;
        }

        return {
            item: updateItems,
            totalAmount: totalAmount,
        };
    }
    
    return initialValue;
}
//definite intial obj
const initialValue={
    item:[],
    totalAmount:0
}

const ContextProvider=(props)=>{
    //to perform addcart process and remove process we use userReducer hook
    const[cartState,dispatchFun]=useReducer(cartReducer,initialValue);

    //to add item to cart
    const addCartHandler=(item)=>{
        dispatchFun({
            type:'add cart',
            item:item
        })
    }

    //to remove item from cart
    const removeCartHandler=(id)=>{
        dispatchFun({
            type:"remove cart amount",
            id:id
        })
    }

    //use this obj to update data from cart context js file
    const cartContext={
        item:cartState.item,
        totalAmount:cartState.totalAmount,
        addCart:addCartHandler,
        removeCart:removeCartHandler
    }
    return <Context.Provider value={cartContext}>
        {props.children}
    </Context.Provider>
}

export default ContextProvider;