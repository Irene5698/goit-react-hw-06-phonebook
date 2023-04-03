import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/slices/contactsSlice';
import css from '../ContactList/ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterToLowerCase)
    );
  };

  const getFilter = filteredContacts();

  return (
    <ul>
      {getFilter.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
          <button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            className={css.contactListItemBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export { ContactList };
