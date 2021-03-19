import React from "react";
import PropTypes from "prop-types";
import style from "./ContactlistItem.module.css";
const ContactlistItem = ({id, number, name, deleteContact}) => {
  return(
    <>
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => deleteContact(id)} className={style.redDelete}>X</button>
    </li>
    </>
  )
}

export default ContactlistItem;

ContactlistItem.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}