import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <div className={css.info}>
        <p className={css.text}>
          <IoPersonSharp className={css.icon} size="18" /> {name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt className={css.icon} size="16" /> {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};

export default Contact;
