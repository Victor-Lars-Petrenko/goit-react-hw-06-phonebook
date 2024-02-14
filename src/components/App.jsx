import { Div, Heading } from './App.styled';

import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export const App = () => {
  return (
    <Div>
      <Heading>Phonebook</Heading>
      <ContactForm />

      <Heading>Contacts</Heading>
      <Filter />
      <ContactList />
    </Div>
  );
};
