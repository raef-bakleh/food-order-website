import React, { useContext, useState } from "react";
import classes from "./Checkout.module.css";
import { useRef } from "react";
import CartContent from "./CartContent";

function Checkout(props) {
  const inputNameRef = useRef();
  const inputStreetRef = useRef();
  const inputPostalCodeRef = useRef();
  const inputCityRef = useRef();
  const [orderMade, setOrderMade] = useState(true);
  const inputHandler = (event) => {
    event.preventDefault();
    const enteredName = inputNameRef.current.value;
    const enteredCity = inputCityRef.current.value;
    const enteredPostal = inputPostalCodeRef.current.value;
    const enteredStreet = inputStreetRef.current.value;

    props.onConfirm(
      {
        name: enteredName,
        city: enteredCity,
        postalCode: enteredPostal,
        street: enteredStreet,
      },
      orderMade
    );
  };

  return (
    <form className={classes.form} onSubmit={inputHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input required type="text" id="name" ref={inputNameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input required type="text" id="street" ref={inputStreetRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input required type="text" id="postal" ref={inputPostalCodeRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input required type="text" id="city" ref={inputCityRef} />
      </div>
      <div className={classes.actions}>
        <button type="submit">Confirm</button>
        <button className={classes.submit} onClick={props.hideCart}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Checkout;
