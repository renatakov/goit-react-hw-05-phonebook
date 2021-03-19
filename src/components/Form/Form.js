import React, { Component } from "react";
import { v4 as id } from "uuid";
import classes from "./Form.module.css";
id();

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    // console.log("input: ", event.target.name);
    // console.log("value: ", event.target.value);
    // console.dir(event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: id(),
      number: number,
      name: name,
    };
    console.log(contact);
    this.props.addContact(contact);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className={classes.inputBorder}>
            <div className={classes.inputDiv}>
              <label>Name</label>
              <input
                type="text"
                required
                name="name"
                onChange={this.handleChange}
              />

              <label>Number</label>
              <input
                type="text"
                required
                name="number"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className={classes.addContact}>
              Add contact
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Form;
