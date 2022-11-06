import React, { Fragment, useState } from "react";
import classes from "./Navbar.moudle.css";
import { BurgerSpin as Burger } from "react-burger-icons";
import { slide as Menu } from "react-burger-menu";

function Navbar(props) {
  const [isClosed, setIsClosed] = useState(false);
  const toggleClose = () => {
    setIsClosed(!isClosed);
  };
  return (
    <div className="navbar">
      <button onClick={toggleClose}>
        <Burger isClosed={isClosed} />
        {/* <Menu {...props}>
          <a className="menu-item" href="/">
            Home
          </a>

          <a className="menu-item" href="/burgers">
            Burgers
          </a>

          <a className="menu-item" href="/pizzas">
            Pizzas
          </a>

          <a className="menu-item" href="/desserts">
            Desserts
          </a>
        </Menu> */}
      </button>
    </div>
  );
}

export default Navbar;
