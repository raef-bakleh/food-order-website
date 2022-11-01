import { Fragment, useState } from "react";
import MealList from "./Components/Meals/MealList";
import CartContent from "./Components/Cart/CartContent";
import { CartContext } from "./Components/Cart/CartContext";
function App() {
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
  const [isVisible, setIsVisible] = useState(false);
  const showCart = () => {
    setIsVisible(true);
  };
  const hideCart = () => {
    setIsVisible(false);
  };
  const reducer = DUMMY_MEALS.reduce((acc, obj) => {
    return acc + obj.price;
  });
  console.log(reducer);
  const [cartAmount,setCartAmount]=useState(0)
  const [cartItems,setCartItems]=useState([])
  const [totalAmount,setTotalAmount] = useState(0)
  return (
    <CartContext.Provider value={{cartAmount,setCartAmount,cartItems,setCartItems,totalAmount,setTotalAmount}}>
      {isVisible && <CartContent hideCart={hideCart} />}
      {<MealList showCart={showCart} meals={DUMMY_MEALS} />}
    </CartContext.Provider>
  );
}

export default App;
