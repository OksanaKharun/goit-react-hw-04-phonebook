import React, { useState, useEffect,useCallback  } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';


const App = () => {
  const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts')) || defaultContacts;
    return localStorageContacts;
  });

  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

   useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


   const handleNameChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const handleNumberChange = useCallback((event) => {
    setNumber(event.target.value);
  }, []);


  const handleAddContact = () => {
    if (!name.trim() || !number.trim()) {
      alert('Please fill in both name and number fields.');
      return;
    }

    const isExist = contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = { id: nanoid(), name, number };
    setContacts((prevContacts) => [...prevContacts, newContact]);
    setName('');
    setNumber('');
  };

   const handleFilterChange = useCallback((event) => {
    setFilter(event.target.value);
   }, []);
  
  const handleDeleteContact = useCallback((id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  }, []);

   const getFilteredContacts = useCallback(() => {
    return contacts.filter((contact) =>
      contact.name && contact.name.toLowerCase().includes((filter || '').toLowerCase())
    );
   }, [contacts, filter]);
  
  
  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        number={number}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        onAddContact={handleAddContact}
      />

      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={getFilteredContacts()} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;