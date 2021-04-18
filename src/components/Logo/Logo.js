import React, { Component } from "react";
import classes from "./Logo.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Logo extends Component {
  state = {
    isLoad: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoad: true });
    }, 150);
  }

  render() {
    return (
      <TransitionGroup className={classes.main}>
        {this.state.isLoad && (
          <CSSTransition timeout={500} classNames={classes}>
            <h1>Phonebook</h1>
          </CSSTransition>
        )}
      </TransitionGroup>
    );
  }
}

export default Logo;
