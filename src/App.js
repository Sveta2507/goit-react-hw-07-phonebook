import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import operations from "./redux/contacts/operation";
import Form from "./components/Form/Form";
import selectors from "./redux/list/selectors";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import { CSSTransition } from "react-transition-group";
import classes from "./App.module.css";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContact();
  }

  render() {
    return (
      <>
        {/* <BrowserRouter>
          <Suspense>
            <Switch>
              <Route exact path={route.Contacts} />
            </Switch>
          </Suspense>
        </BrowserRouter> */}
        {this.props.isLodingContact}
        <div className={classes.container}>
          <CSSTransition
            in={true}
            classNames="logo"
            timeout={500}
            appear={true}
            unmountOnExit
          >
            <h1>Phonebook</h1>
          </CSSTransition>
          <Form />
          <h2>Contacts</h2>

          <Filter />

          <ContactList />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLodingContact: selectors.getLoding(state),
});

const mapDispatchToProps = {
  onFetchContact: operations.fetchContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
