import React from "react";
import { useDispatch } from "react-redux";
import { removeContact } from "../../redux/contactSlice";
import { Link } from "react-router-dom";

function Item({ item }) {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <li className="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
      <span>{item.name}</span>
      <span>{item.phone_number}</span>
      <div>
        <button className="btn btn-outline-warning mx-2">
          <Link to={`/edit/${item.id}`}>🖋️</Link>
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => handleRemove(item.id)}
        >
          ⛔
        </button>
      </div>
    </li>
  );
}

export default Item;
