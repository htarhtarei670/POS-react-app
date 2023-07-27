import { Fragment } from "react";
import MealAvalible from "./MealAvalible";
import MealSummary from "./MealSummary";

const Meal=()=>{
    return(
        <Fragment>
            <MealSummary/>
            <MealAvalible/>
        </Fragment>
    )
}
export default Meal;