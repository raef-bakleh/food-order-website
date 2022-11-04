import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./CartContent.module.css";
import { CartContext } from "../Cart/CartContext";
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

  return (
    <Modal hideCart={props.hideCart}>
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
                  <div className={classes.quantity}>{item.quantity} x {item.priceOne}</div>
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
        <button onClick={console.log("ordering")} className={classes.button}>
          order
        </button>
        <button onClick={props.hideCart} className={classes.button}>
          cancel
        </button>
      </div>
    </Modal>
  );
}

export default CartContent;
