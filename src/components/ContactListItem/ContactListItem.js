import React from "react";
import PropTypes from "prop-types";
import classes from "./ContactListItem.module.css";
import { connect } from "react-redux";
import { removeContact } from "../../redux/operations";

const ContactlistItem = ({ id, number, name, deleteContact }) => {
  return (
    <>
      <li>
        <p>{name}</p>
        <p>{number}</p>
        <button
          className={classes.button}
          type="button"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

ContactlistItem.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  deleteContact: removeContact,
};
export default connect(null, mapDispatchToProps)(ContactlistItem);
