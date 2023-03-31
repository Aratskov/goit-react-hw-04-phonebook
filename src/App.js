import { useEffect, useState } from "react";
import { ContactForm } from "./Components/ContactForm/ContactForm";
import { ContactList } from "./Components/ContactList/ContactList";
import { Filter } from "./Components/Filter/Filter";
import { ContainerWrap, Container } from "./App.styled";

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? [];
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    contacts.find(({ name }) => name === contact.name)
      ? alert(`${contact.name} is already in contacts!`)
      : setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const findChange = (event) => {
    const { value } = event.target;
    setFilter(value);
  };

  const filterName = () => {
    const small = filter.toLocaleLowerCase();
    return contacts.filter((el) => el.name.toLowerCase().includes(small));
  };

  const filtered = filterName();

  const removeContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((el) => el.id !== id));
  };

  return (
    <ContainerWrap>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addContactFull={addContact} />
        {contacts.length === 0 || (
          <>
            <h2>Contacts</h2>
            <Filter findName={findChange} />
          </>
        )}

        <ContactList contacts={filtered} removeContact={removeContact} />
      </Container>
    </ContainerWrap>
  );
}

export default App;
