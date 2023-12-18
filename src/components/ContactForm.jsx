import React from 'react';


const ContactForm = ({ name, number, handleNameChange, handleNumberChange, handleAddContact  }) => {
  return (
    <form className="contact-form"
      onSubmit={(event) => handleAddContact(event)}>
      <label>
        Name
        <input type="text" value={name}
          onChange={handleNameChange} required />
      </label>
      <label>
        Number
        <input type="tel" value={number}
          onChange={handleNumberChange} required />
      </label>
      <button className="contact-btn" type="submit" >Add contact</button>
    </form>
  );
};

export default ContactForm;