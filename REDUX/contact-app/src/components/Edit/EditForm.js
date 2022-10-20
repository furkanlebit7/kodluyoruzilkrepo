import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateContact } from "../../redux/contactSlice";

function EditForm({ contact }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone_number);

  const handleEdit = (e) => {
    e.preventDefault();

    dispatch(
      updateContact({
        id: contact.id,
        changes: {
          name,
          phone_number: phone,
        },
      })
    );
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleEdit}>
        <input
          className="form-control"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control mt-3"
          placeholder="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button className="btn btn-primary my-3" type="submit">
          Edit
        </button>
      </form>
    </div>
  );
}

export default EditForm;
