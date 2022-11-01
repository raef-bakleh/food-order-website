import React, { Fragment, useState } from "react";
import Card from "../UI/Card";
import Description from "./Description";
import classes from "./Header.module.css";
import CartIcon from "../Cart/CartIcon.js"

function Header(props) {
 
  return (
    <Card>
      <header className={classes.header}>
        <h1>Hungry ?</h1>
        <CartIcon onclick={props.showcart} number = {props.number}/>
      </header>

      <div className={classes.img}>
        <img />
      </div>
      <Description />
    </Card>
  );
}

export default Header;
