export const getFilterValue = (state) => state.phonebook.filter;

export const getContactsList = (state) => state.phonebook.contacts;

export const getFiltredContactsList = (state) => {
  const filter = getFilterValue(state);
  const contacts = getContactsList(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(normalizedFilter) ||
      number.includes(normalizedFilter)
  );
};