import { Fragment, useState } from "react";
import MealList from "./Components/Meals/MealList";
import CartContent from "./Components/Cart/CartContent";
import { CartContext } from "./Components/Cart/CartContext";
import { FilterContext } from "./Components/Filter/FilterContext";
function App() {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      priceOne: 22.99,
      quantity: 1,
      value: "bestSeller",
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
      priceOne: 16.5,
      quantity: 1,
      value: "availble",
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      priceOne: 12.99,
      quantity: 1,
      value: "availble",
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
      priceOne: 18.99,
      quantity: 1,
      value: "availble",
    },
  ];
  const [isVisible, setIsVisible] = useState(false);
  const showCart = () => {
    setIsVisible(true);
  };
  const hideCart = () => {
    setIsVisible(false);
  };

  const [cartAmount, setCartAmount] = useState(0.0);
  const [cartItems, setCartItems] = useState([]);
  const [mealQuantitiy, setMealQuantitiy] = useState(
    DUMMY_MEALS.map((e) => e.quantity)
  );
  const [totalAmount, setTotalAmount] = useState(0.0);
  const [filterdMeals, setFilterMeals] = useState("availble");

  return (
    <CartContext.Provider
      value={{
        mealQuantitiy,
        setMealQuantitiy,
        cartAmount,
        setCartAmount,
        cartItems,
        setCartItems,
        totalAmount,
        setTotalAmount,
      }}
    >
      {isVisible && <CartContent hideCart={hideCart} />}
      <FilterContext.Provider value={{ filterdMeals, setFilterMeals }}>
        {<MealList showCart={showCart} meals={DUMMY_MEALS} />}
      </FilterContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
