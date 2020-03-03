import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const contactContex = useContext(ContactContext);
  const text = useRef("");

  useEffect(() => {
    if (!filtered) {
      text.current.value = "";
    }
  });

  const { filterContacts, clearFilter, filtered } = contactContex;

  const onChange = e => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Contacts...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
