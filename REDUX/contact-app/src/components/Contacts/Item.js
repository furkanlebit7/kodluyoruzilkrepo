import React from 'react'

function Item({item}) {
  return (
    <li className="list-group-item list-group-item-action d-flex align-items-center justify-content-between w-50 m-auto">
      <span>{item.name}</span>
      <span>{item.phone_number}</span>
    </li>
  )
}

export default Item