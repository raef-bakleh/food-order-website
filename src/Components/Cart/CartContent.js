import React from "react";
import Modal from "../UI/Modal";
import classes from "./CartContent.module.css";
function CartContent(props) {
  const cartItems = [{ id: "e1", name: "suhi", amount: 2, price: 12.99 }].map(
    (item) => {
      <li>{item.name}</li>;
    }
  );
  return (
    <Modal hideCart={props.hideCart}>
      cart Items
      <div onClick={props.hideCart}>
        <span className={classes.total}>Total Amount</span>
        <span>35.43</span>
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
