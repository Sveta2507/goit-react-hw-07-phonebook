import React from "react";
import { ContactlistItem } from "../ContactListItem";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./ContactList.module.scss";
import { connect } from "react-redux";
import actions from "../../redux/actions";

const Contactlist = ({ contacts }) => {
  return (
    <TransitionGroup component="ul" className={styles.contactsUl}>
      {contacts.map((item) => {
        const { name, id, number } = item;
        return (
          <CSSTransition
            key={id}
            timeout={250}
            classNames={styles}
            in={contacts.length > 0}
          >
            <ContactlistItem name={name} number={number} id={id} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

Contactlist.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = (state) => {
  const {
    contacts: { items, filter },
  } = state;
  const filteredNames = items.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return {
    contacts: filteredNames,
  };
};

const mapDispatchToProps = {
  deleteContact: actions.addContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contactlist);
