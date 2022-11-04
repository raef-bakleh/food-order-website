import React, { Fragment, useContext, useState } from "react";
import Header from "../Header/Header";
import classes from "./MealList.module.css";
import { CartContext } from "../Cart/CartContext";
import Filter from "../Filter/Filter";
import Card from "../UI/Card";
import { FilterContext } from "../Filter/FilterContext";
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
  };
  const { filterdMeals, setFilterMeals } = useContext(FilterContext)

  const filteredMeals = props.meals.filter((filtered)=>{
    return filtered.value===filterdMeals

  })
  return (
    <Fragment>
      <Header showcart={props.showCart} />
      <Card>
      <Filter />
      <section className={classes.meals}>
        <ul>
          {filteredMeals.map((meal) => (
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
                    setMealQuantitiy(1);

                    setCartItems((prevMeals) => {
                      const allMeals = [meal, ...prevMeals];
                      const mealsInCart = prevMeals.map((meal) => meal);

                      if (mealsInCart.some((item) => item.id === meal.id)) {
                        return mealsInCart.map((item) =>
                          item.id === meal.id
                            ? {
                                ...item,
                                quantity: item.quantity + 1,
                                price: item.price + meal.price,
                              }
                            : item
                        );
                      } else {
                        return allMeals;
                      }
                    });
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      </Card>
    </Fragment>
  );
}

export default MealList;
