import React, { useContext } from "react";
import classes from "./Filter.module.css";
import { FilterContext } from "./FilterContext";
function Filter() {
  const { filterdMeals, setFilterMeals } = useContext(FilterContext);

  const filteredList = (e) => {
    setFilterMeals(e.target.id);
  };

  return (
    <nav className={classes.nav}>
      <div>
        <ul>
          <li onClick={filteredList} id="bestSeller">
            Beset Seller
          </li>
          <li onClick={filteredList} id="vegan">
            Vegan
          </li>{" "}
          <li onClick={filteredList} id="starter">
          starter
          </li>
          <li onClick={filteredList} id="deals">
            Deals
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Filter;
