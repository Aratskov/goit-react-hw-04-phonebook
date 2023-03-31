import { useState } from "react";
import { Form, Input, Btn } from "./ContactForm .styled";
import { nanoid } from "nanoid";

export const ContactForm = ({ addContactFull }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const addContact = (event) => {
    event.preventDefault();
    const form = { name, number, id: nanoid() };
    addContactFull(form);
    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={addContact}>
      <Input
        type="text"
        name="name"
        value={name}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={({ target }) => setName(target.value)}
        required
      />
      <Input
        type="tel"
        name="number"
        value={number}
        placeholder="Phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={({ target }) => setNumber(target.value)}
        required
      />
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
};
