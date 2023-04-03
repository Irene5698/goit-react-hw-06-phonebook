import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from '../components/App.module.css';

const App = () => {
  return (
    <div className={css.componentsForm}>
      <h2 className={css.titlePhonebook}>Phone book</h2>
      <ContactForm />
      <h2 className={css.titleContact}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export { App };
