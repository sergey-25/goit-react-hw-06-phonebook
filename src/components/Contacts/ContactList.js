import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import PropTypes from "prop-types";
import { Contacts, Item, Button } from "./ContactsList.styled";
import { IoPerson } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import { getFiltredContactsList } from "../../redux/contacts/contacts-selectors";

function ContactsList() {
  const contacts = useSelector(getFiltredContactsList);
  const dispatch = useDispatch();

  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <div>
               <span>
              <IoPerson size={14} color="steelblue" />
              {name}:
            </span>

            <span>
              <ImPhone size={14} color="steelblue" />
              {number}
            </span>
           </div>
            <Button
              type="button"
              onClick={() => dispatch(actions.deleteContact(id))}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </Contacts>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default ContactsList;