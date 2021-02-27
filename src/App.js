import "./App.css";
import React, { Component } from "react";
import { Form } from "./components/Form";
import { Contactlist } from "./components/Contactlist";
import { Filter } from "./components/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    filter: "",
  };

  addContact = (obj) => {
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, obj] };
    });
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleFilterChange = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.includes(filter),
    );
    return (
      <>
        <Form addContact={this.addContact} />
        <Filter
          filteredContacts={this.handleFilterChange}
          value={this.state.filter}
          onChange={this.handleFilterChange}
        />
        <Contactlist contacts={filteredContacts} deleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;
