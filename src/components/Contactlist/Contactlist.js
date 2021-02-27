import React from "react";
import { ContactlistItem } from "../ContactlistItem";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./Contactlist.module.css";

const Contactlist = ({ contacts, deleteContact }) => {
  return (
    <>
      <TransitionGroup component="ul" className={styles.contactsUl}>
        {contacts.map((item) => {
          console.log(item);
          const { name, id, number } = item;
          return (
            <CSSTransition key={id} timeout={250} classNames={styles}>
              <ContactlistItem name={name} number={number} id={id} deleteContact={deleteContact}/>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </>
  );
};

export default Contactlist;

Contactlist.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
