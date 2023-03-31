import { List, Item, Btn } from "./ContactList.styled";

export const ContactList = ({ contacts, removeContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <span>{name} :</span>
          <span>{number}</span>
          <Btn type="button" onClick={() => removeContact(id)}>
            {" "}
            x{" "}
          </Btn>
        </Item>
      ))}
    </List>
  );
};
