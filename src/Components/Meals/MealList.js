import React, { Fragment, useState } from "react";
import Header from "../Header/Header";
import classes from "./MealList.module.css";

function MealList(props) {

  const [count, setCount] = useState(0);

  const updateCart = () => {
    setCount(count + 1);
  };

  return (
    <Fragment>
      <Header showcart={props.showCart} number={count}/>
      <section className={classes.meals}>

        <ul>
          {props.meals.map((meal) => (
            <li key = {meal.id} className={classes.meal}>
              {meal.name}
              <h3 className={classes.description}>{meal.description}</h3>
              <h3 className={classes.price}> {meal.price}</h3>
              <div>
                <button onClick={updateCart}>Add To Cart</button>
                {/* <button onClick={decrease}>-</button> */}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Fragment>
  );
}

export default MealList;
