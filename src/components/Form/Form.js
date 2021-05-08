import classes from "./Form.module.css";
import React, { Component } from "react";
import { v4 as id } from "uuid";
import Alert from "../Notifications/Notifications";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import actions from "../../redux/actions";
import { connect } from "react-redux";
class Form extends Component {
  state = {
    name: "",
    number: "",
    alert: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isExists !== this.props.isExists) {
      this.setState({ alert: this.props.isExists });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    const { contacts, addContact } = this.props;
    const contact = {
      id: id(),
      number: number,
      name: name,
    };
    if (contacts.find(({ name }) => name === contact.name)) {
      this.setState({
        alert: true,
      });
      return;
    }
    addContact(contact);
    this.setState({ name: "", number: "" });
  };

  changeAlert = (bool) => {
    this.setState({ alert: bool });
  };

  render() {
    const { name, number } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <>
        <TransitionGroup className={classes.notif}>
          {this.state.alert && (
            <CSSTransition timeout={250} classNames={classes}>
              <Alert change={this.changeAlert} />
            </CSSTransition>
          )}
        </TransitionGroup>
        <form onSubmit={handleSubmit}>
          <label className={classes.label}>Name: </label>
          <input
            type="text"
            required
            name="name"
            onChange={handleChange}
            placeholder="Enter your name please"
            value={name}
          />
          <label className={classes.label}>Number: </label>
          <input
            type="text"
            required
            name="number"
            onChange={handleChange}
            placeholder="Enter your phone number please"
            value={number}
          />
          <button type="submit" className={classes.button}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = ({ contacts }) => ({
  contacts: contacts.items,
});

const mapDispatchToProps = {
  addContact: actions.addContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
