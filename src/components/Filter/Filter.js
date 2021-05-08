import React from "react";
import classes from "./Filter.module.css";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/actions";
import { getFilter } from "../../redux/selectors";

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
  value: getFilter(contacts),
});

const mapDispatchToProps = {
  toFilter: changeFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
