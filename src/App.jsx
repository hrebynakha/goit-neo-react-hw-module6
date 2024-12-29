import { useSelector } from "react-redux";
import Container from "./components/Container/Container";
import ContactList from "./components/ContactList/ContactList";

import "./App.css";

function App() {
  const filtredContacts = useSelector((state) => {
    console.log("state", state);
    return state.contacts;
  });

  return (
    <Container>
      <h1>Phonebook</h1>
      {/* <ContactForm onSubmit={addContact} /> */}
      {/* <SearchBox handleChange={handleChange} /> */}
      {filtredContacts.length > 0 ? (
        <ContactList contacts={filtredContacts} onDelete={() => {}} />
      ) : (
        <h1>Not found contacts</h1>
      )}
    </Container>
  );
}

export default App;
