import { findAllByTestId } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import classes from "./Description.module.css";

function Description(props) {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
console.log(props.isLoadingMeals)
  useEffect(() => {
    setTimeout(function () {
      setShow1(true);
    }, 1200);
  }, []);
  useEffect(() => {
    setTimeout(function () {
      setShow2(true);
    }, 2000);
  }, []);
  useEffect(() => {
    setTimeout(function () {
      setShow3(true);
    }, 3000);
  }, []);
  return (
    <div className={classes.description}>
      {props.isLoadingMeals ? <p>Loading Meals...</p> : <></>}
      {!props.isLoadingMeals && show1 ? <h4>are you haungry?</h4> : <></>}
      {!props.isLoadingMeals && show2 ? <h1>Don't wait</h1> : <></>}
      {!props.isLoadingMeals && show3 ? <h4>lets start to order food now </h4> : <></>}
    </div>
  );
}

export default Description;
