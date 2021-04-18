import React from "react";
import { ContactlistItem } from "../ContactListItem";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./ContactList.module.scss";
import { removeContact } from "../../redux/operations";
import { connect } from "react-redux";
import { getAll } from "../../redux/selectors";

const Contactlist = ({ contacts, deleteContact }) => {
  return (
    <TransitionGroup component="ul" className={styles.contactsUl}>
      {contacts.map((item) => {
        // console.log(item);
        const { name, id, number } = item;
        return (
          <CSSTransition
            key={id}
            timeout={250}
            classNames={styles}
            in={contacts.length > 0}
          >
            <ContactlistItem
              name={name}
              number={number}
              id={id}
              deleteContact={deleteContact}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

// export default Contactlist;

Contactlist.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = (state) => ({
  visibleContacts: getAll(state),
});

const mapDispatchToProps = {
  handleDelete: removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contactlist);
