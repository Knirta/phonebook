import Contact from "../Contact";
import { useSelector } from "react-redux";
import { selectVisisbleContacts } from "../../redux/constacts/selectors.js";
import css from "./ContactList.module.css";

const ContactList = () => {
  const visibleContacts = useSelector(selectVisisbleContacts);
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
