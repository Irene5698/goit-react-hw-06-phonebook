import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/slices/contactsSlice';
import css from '../ContactForm/ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleChange = e => {
    const nameInput = e.currentTarget.name;
    const valueInput = e.currentTarget.value;

    switch (nameInput) {
      case 'name':
        setName(valueInput);
        break;
      case 'number':
        setNumber(valueInput);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contactsFind = contacts.find(
      ({ name }) =>
        name.toLowerCase() === e.currentTarget.name.value.toLowerCase()
    );

    if (contactsFind) {
      return alert(`${e.currentTarget.name.value} is already in contacs.`);
    }

    dispatch(addContact({ name, number }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.formLabel}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          className={css.formInput}
        ></input>
      </label>
      <label className={css.formLabel}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
          className={css.formInput}
        />
      </label>
      <button type="submit" className={css.formButton}>
        Add contact
      </button>
    </form>
  );
};

export { ContactForm };
