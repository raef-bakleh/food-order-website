import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./CartContent.module.css";
import { CartContext } from "../Cart/CartContext";
function CartContent(props) {
  // const cartItems = [{ id: "e1", name: "suhi", amount: 2, price: 12.99 }].map(
  //   (item) => {
  //     <li>{item.name}</li>;
  //   }
  // );

  const {cartItems} =useContext(CartContext)
  console.log(cartItems)

  return (
    <Modal hideCart={props.hideCart}>
      {cartItems.map(item => {
        return <div className={classes.overview} type="scroll">
          <div>{item.name}</div>
          <div> {`$`}{item.price}</div>

        </div>
      })}

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
