import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm";
import SearchBox from "../../components/SearchBox";
import ContactList from "../../components/ContactList";
import { fetchContacts } from "../../redux/constacts/operations.js";
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from "../../redux/constacts/selectors.js";

const ContactsPage = () => {
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

export default ContactsPage;
