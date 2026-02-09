import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";
import { fetchContacts } from "../redux/operations.js";
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from "../redux/contactsSlice.js";

const App = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <p>Loading contacts...</p>}
      {error && <p>Error: {error}</p>}
      <h1>Phonebook</h1>
      <ContactForm />
      {items.length > 0 && (
        <>
          <SearchBox />
          <ContactList />
        </>
      )}
    </>
  );
};

export default App;
