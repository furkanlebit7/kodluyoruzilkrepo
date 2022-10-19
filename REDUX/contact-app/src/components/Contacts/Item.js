import React from 'react'
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactSlice';

function Item({item}) {

    const dispatch = useDispatch();

    const handleRemove = (id) => {
      dispatch(removeContact(id))
    }


  return (
    <li className="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
      <span>{item.name}</span>
      <span>{item.phone_number}</span>
      <button className="btn btn-outline-danger" onClick={()=>handleRemove(item.id)}>⛔</button>
    </li>
  )
}

export default Item