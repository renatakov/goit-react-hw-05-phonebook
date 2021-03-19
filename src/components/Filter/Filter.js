import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./Filter.module.css"

const Filter = ({ onChange, value }) => {
  return (
    <>
    <div className={styles.borderFilter}>
      <label>Find contact by name</label>
      <input type="text" onChange={onChange} value={value} />
    </div>
    </>
  );
};

export default Filter;
