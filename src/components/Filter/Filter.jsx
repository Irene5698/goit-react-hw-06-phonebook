import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/slices/filterSlice';
import css from '../Filter/Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.filter);

  return (
    <div className={css.filter}>
      <label className={css.filterName}>
        Find contacts by name
        <input
          type="text"
          value={inputValue}
          onChange={e => dispatch(filterContacts(e.currentTarget.value))}
          className={css.filterInput}
        ></input>
      </label>
    </div>
  );
};

export { Filter };
