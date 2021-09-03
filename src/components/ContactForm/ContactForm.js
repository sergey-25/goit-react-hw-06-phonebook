import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import { nanoid } from "nanoid";
import { Form, Input, Label, Button } from "./ContactsForm.styled";
import { getContactsList } from "../../redux/contacts/contacts-selectors";

function ContactsForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsList);

  let nameInputId = nanoid(3);
  let telInputId = nanoid(3);

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (contacts.some((contact) => contact.name === name)) {
      alert(`Contact ${name} already exists`);

      return;
    }

    dispatch(actions.addContact({ id: nanoid(3), name, number }));

    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={`id-${nameInputId}`}>Name</Label>
      <Input
        id={`id-${nameInputId}`}
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={name}
        onChange={handleChange}
        required
      />

      <Label htmlFor={`id-${telInputId}`}>Number</Label>
      <Input
        id={`id-${telInputId}`}
        type="tel"
        name="number"
        placeholder="+38 (XXX) XXX-XX-XX"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        value={number}
        onChange={handleChange}
        required
      />

      <Button type="submit">Add contact</Button>
    </Form>
  );
}

export default ContactsForm;