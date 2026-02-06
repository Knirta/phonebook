import Contact from "../Contact";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css";

const getVisibleContacts = (contacts, filter) =>
  contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.text);
  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
