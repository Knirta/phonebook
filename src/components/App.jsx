import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";
import { fetchContacts } from "../../redux/operations.js";

const App = () => {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>Error: {error}</p>}
      {items.length > 0 && (
        <>
          <h1>Phonebook</h1>
          <ContactForm />

          <SearchBox />
          <ContactList />
        </>
      )}
    </>
  );
};

export default App;
