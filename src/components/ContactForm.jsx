import React from 'react';


const ContactForm = ({ name, number, onNameChange, onNumberChange, onAddContact  }) => {
  return (
    <form className="contact-form"
      onSubmit={(event) => onAddContact(event)}>
      <label>
        Name
        <input type="text" value={name}
          onChange={onNameChange} required />
      </label>
      <label>
        Number
        <input type="tel" value={number}
          onChange={onNumberChange} required />
      </label>
      <button className="contact-btn" type="submit" >Add contact</button>
    </form>
  );
};

export default ContactForm;