import React, { Component } from "react";

let id;
class Alert extends Component {
  disableAlert = () => {
    this.props.change(false);
  };

  componentWillUnmount() {
    clearTimeout(id);
  }

  render() {
    id = setTimeout(() => {
      this.disableAlert();
    }, 1700);

    return (
      <h4>
        Warning! You are trying to add contact, which has already been added!
      </h4>
    );
  }
}

export default Alert;
