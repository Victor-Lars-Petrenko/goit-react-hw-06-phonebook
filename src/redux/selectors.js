export const getContacts = state => state.contacts;

export const getFilteredContacts = ({ filter, contacts }) => {
  if (filter === '') {
    return contacts;
  }
  const filtered = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return filtered;
};
