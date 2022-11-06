import { useState, useEffect } from "react";
import MealList from "./Components/Meals/MealList";
import CartContent from "./Components/Cart/CartContent";
import { CartContext } from "./Components/Cart/CartContext";
import { FilterContext } from "./Components/Filter/FilterContext";

function App() {
  const [DUMMY_MEALS, setDummyMeals] = useState([]);
  const [isLoadingMeals, setIsLoadingMeals] = useState(false);
  useEffect(() => {
    setIsLoadingMeals(true);
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-aa5fe-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      const retrievedData = await response.json();
      const convertedToList = [];

      for (const key in retrievedData) {
        convertedToList.push({
          id: key,
          name: retrievedData[key].name,
          description: retrievedData[key].description,
          price: retrievedData[key].price,
          priceOne: retrievedData[key].priceOne,
          quantity: retrievedData[key].quantity,
          value: retrievedData[key].value,
        });
      }
      setDummyMeals(convertedToList);
      setIsLoadingMeals(false);
    };
    
      fetchMeals();
   
  }, []);

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
    <div id="App">
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
    </div>
  );
}

export default App;
