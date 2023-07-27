import { useRef } from "react";
import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input";

const MealItemForm=(props)=>{
    const inputRef= useRef();

    const submitHandler=(event)=>{
        event.preventDefault();
        const enterItem=inputRef.current.value;
        const enterItemNum=+enterItem;

        if(enterItem.trim().length ===0||enterItemNum > 5 ||enterItemNum < 1){
            return;
        }

        props.onAddCart(enterItemNum);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                label="amount" 
                ref={inputRef}
                input={{
                    id: "amount_" + props.id,
                    type: "number",
                    min: 1,
                    max: 5,
                    setp: 1,
                    defaultValue: 1,
                }}
             />
           <button> +Add</button>
        </form>
    )
}
export default MealItemForm;