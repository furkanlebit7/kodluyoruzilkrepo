import React from "react";
import { useSelector } from "react-redux";
import { contactSelectors } from "../../redux/contactSlice";

function Header() {
  const countContacts = useSelector(contactSelectors.selectTotal);

  return <h1 className="mt-5">Contacts({countContacts})</h1>;
}

export default Header;
