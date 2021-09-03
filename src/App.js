import { Container } from "./components/Container/Container";
import { Section } from "./components/Section/Section";
import ContactsForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/Contacts/ContactList";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <Container>
      <Section title="Phonebook">
        <ContactsForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </Container>
  );
}

export default App;