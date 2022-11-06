import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./CartContent.module.css";
import { CartContext } from "../Cart/CartContext";
import Checkout from "./Checkout.js";
import {IoCheckmarkDoneCircle} from "react-icons/io5";
function CartContent(props) {
  const {
    quantity,
    setQuantity,
    cartAmount,
    setCartAmount,
    cartItems,
    setCartItems,
    totalAmount,
    setTotalAmount,
  } = useContext(CartContext);

  const [orderForm, setOrderForm] = useState(false);
  const showOrderForm = () => {
    setOrderForm(true);
  };

  const [orderDone,setOrderDone] =useState(false)
  console.log(orderDone)
  const checkout = (userData,orderMade) => {
    setOrderDone(orderMade)
    setCartItems([])
    setCartAmount(0.00)
    setTotalAmount(0.00)


    fetch(
      "https://food-order-aa5fe-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartItems,
        }),
      }
    );
  };


  return (
   <Modal hideCart={props.hideCart}>
         {!orderDone &&  <div>
        <div className={classes.overview}>
          <div>
            <span id="meal">Meal</span>
            {cartItems.map((item) => {
              return (
                <div className={classes.overview} type="scroll">
                  <div className={classes.oneItem}>
                    <div className={classes.name}> {item.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <span id="meal">Quantity</span>
            {cartItems.map((item) => {
              return (
                <div className={classes.overview} type="scroll">
                  <div>
                    <div className={classes.quantity}>
                      {item.quantity} x {item.priceOne}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <span id="meal">Price</span>
            {cartItems.map((item) => {
              return (
                <div className={classes.overview} type="scroll">
                  <div className={classes.price}>
                    {`$`}
                    {`${item.price.toFixed(2)}`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div onClick={props.hideCart}>
          <span className={classes.total}>Total Amount</span>
          <span>${`${totalAmount.toFixed(2)}`}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={showOrderForm} className={classes.button}>
            order
          </button>
          <button onClick={props.hideCart} className={classes.button}>
            cancel
          </button>
        </div>
        {orderForm && totalAmount > 0 && (
          <Checkout onConfirm={checkout} hideCart={props.hideCart} />
        )}
      </div>}
      {orderDone &&<div className={classes.orderDone}><p>Thank you for your order<IoCheckmarkDoneCircle /> </p></div> } 

    </Modal>
  );
}

export default CartContent;
