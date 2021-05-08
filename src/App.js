import "./App.css";
import React from "react";
import { Form } from "./components/Form";
import { ContactList } from "./components/ContactList";
import { Filter } from "./components/Filter";
import Logo from "./components/Logo/Logo";

export default function App() {
  return (
    <>
      <Logo />
      <Form />
      <Filter />
      <ContactList />
    </>
  );
}
