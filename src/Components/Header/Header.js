import React, { Fragment, useState } from "react";
import Card from "../UI/Card";
import Description from "./Description";
import classes from "./Header.module.css";
import CartIcon from "../Cart/CartIcon.js";
import { CartContext } from "../Cart/CartContext";
import Navbar from "../../NavBar/Navbar";

function Header(props) {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div className={classes.first}>
          <Navbar />

          <h1>Hungry?</h1>
        </div>
        <CartIcon onclick={props.showcart} number={props.number} />
      </header>

      <div className={classes.img}>
        <img />
      </div>
      <Description />
    </div>
  );
}

export default Header;
