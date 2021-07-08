import PropTypes from "prop-types";
import s from "./ContactItem.module.scss";

const ContactItem = ({ name, number }) => (
  <div className={s.wrapper}>
    <p className={s.contact}>{name}</p>
    <p className={s.contact}>{number}</p>
  </div>
);

ContactItem.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContactItem;
