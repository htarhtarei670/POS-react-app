import classes from "./MealAvalible.module.css"
import Card from "../UI/Card";
import MealIten from "./MealItems/MealItem";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
    },
   ];

const MealAvalible=()=>{
    const mealList=DUMMY_MEALS.map((meal)=>
        <MealIten name={meal.name} description={meal.description} price={meal.price} key={meal.id} id={meal.id}/>
    )
    return(
        <Card>
            <section className={classes.meals}>
             <ul>{mealList}</ul>
            </section>
        </Card>
    )
}
export default MealAvalible;