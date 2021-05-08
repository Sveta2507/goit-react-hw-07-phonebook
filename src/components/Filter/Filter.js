import React from "react";
import classes from "./Filter.module.css";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import actions from "../../redux/actions";

const Filter = ({ toFilter, value }) => {
  return (
    <CSSTransition in={value !== ""} timeout={0}>
      <>
        <label className={classes.label}>Filter:</label>
        <input
          type="text"
          value={value}
          placeholder="Filter contacts if necessary"
          onChange={(event) => {
            return toFilter(event.target.value);
          }}
        />
      </>
    </CSSTransition>
  );
};

const mapStateToProps = ({ contacts }) => ({
  value: contacts.filter,
});

const mapDispatchToProps = {
  toFilter: actions.handleFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
