import React from "react";
import classes from "./Filter.module.css";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/actions";
import { getFilter } from "../../redux/selectors";

const Filter = ({ onChange, value }) => {
  return (
    <CSSTransition in={value !== ""} timeout={0}>
      <>
        <label className={classes.label}>Filter:</label>
        <input
          type="text"
          onChange={onChange}
          value={value}
          placeholder="Filter contacts if necessary"
        />
      </>
    </CSSTransition>
  );
};

// export default Filter;

const mapStateToProps = state => ({
  filter: getFilter(state),
});
const mapDispatchToProps = {
  handleChange: changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
