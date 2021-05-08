import React from "react";
import { ContactlistItem } from "../ContactListItem";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./ContactList.module.scss";
import { connect } from "react-redux";
// import actions from "../../redux/actions";
import { getAll } from "../../redux/selectors";

const Contactlist = ({ getAll, handleDelete }) => {
  return (
    <TransitionGroup component="ul" className={styles.contactsUl}>
      {getAll.map((item) => {
        const { name, id, number } = item;
        return (
          <CSSTransition
            key={id}
            timeout={250}
            classNames={styles}
            in={getAll.length > 0}
            handleDelete={() => handleDelete(id)}
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

// const mapStateToProps = (state) => {
//   const {
//     contacts: { items, filter },
//   } = state;
//   const filteredNames = items.filter((contact) => {
//     return contact.name.toLowerCase().includes(filter.toLowerCase());
//   });

//   return {
//     contacts: filteredNames,
//   };
// };

const mapStateToProps = (state) => ({
  visibleContacts: getAll(state),
});

// const mapDispatchToProps = {
//   deleteContact: removeContact,
// };

export default connect(mapStateToProps)(Contactlist);
