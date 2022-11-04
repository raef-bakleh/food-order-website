import React, { Fragment, useContext, useState } from "react";
import Header from "../Header/Header";
import classes from "./MealList.module.css";
import { CartContext } from "../Cart/CartContext";
function MealList(props) {
  const {
    mealQuantitiy,
    setMealQuantitiy,
    cartAmount,
    setCartAmount,
    cartItems,
    setCartItems,
    totalAmount,
    setTotalAmount,
  } = useContext(CartContext);


  const updateCart = () => {
    setCartAmount(cartAmount + 1);
    // console.log(cartAmount);
  };

  // console.log(cartItems);

  return (
    <Fragment>
      <Header showcart={props.showCart} />
      <section className={classes.meals}>
        <ul>
          {props.meals.map((meal) => (
            <li key={meal.id} className={classes.meal}>
              {meal.name}
              <h3 className={classes.description}>{meal.description}</h3>
              <h3 className={classes.price}> {meal.price}</h3>
              <div>
                <button
                  className={classes.button}
                
                  onClick={() => {
                    setCartAmount(cartAmount + 1);
                    setTotalAmount(totalAmount + meal.price);
                    setMealQuantitiy(1)

                    setCartItems((prevMeals) => {
                      const allMeals = [meal, ...prevMeals];
                      const mealsInCart = prevMeals.map((meal) => meal);

                      if (mealsInCart.some((item) => item.id === meal.id)) {
                        return (mealsInCart.map(item => item.id === meal.id?{...item,quantity:item.quantity+1,price:item.price + meal.price} : item));
                      } else {
                        return allMeals;
                      }
                    });
                  }}
                >
                  Add To Cart
                </button>
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
