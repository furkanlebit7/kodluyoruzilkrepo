import React from "react";
import EditForm from "./EditForm";
import HeaderEdit from "./HeaderEdit";
import { contactSelectors } from "../../redux/contactSlice";
import { useParams, redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function Edit() {
  const { id } = useParams();

  const contact = useSelector((state) =>
    contactSelectors.selectById(state, id)
  );
  if (!contact) {
    return redirect("/");
  }

  return (
    <div className="App container">
      <HeaderEdit />
      <EditForm contact={contact} />
    </div>
  );
}

export default Edit;
