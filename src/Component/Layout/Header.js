import { Fragment, useContext } from "react";
import classes from "./Header.module.css"
import MealImg from "../../asset/meals.jpg"
import HeaderBtn from "./HeaderBtn";

const Header=(props)=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>OmiFood Shop</h1>
                <HeaderBtn onShown={props.onShow}/>
            </header>
            <div className={classes["main-image"]}>
                <img src={MealImg} alt="Main background"/>
            </div>
        </Fragment>
    )
}
export default Header;