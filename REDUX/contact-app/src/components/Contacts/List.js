import React from 'react'
import { useSelector } from 'react-redux'
import { contactSelectors } from '../../redux/contactSlice'
import Item from './Item'

function List() {

    const contacts = useSelector(contactSelectors.selectAll)
    console.log(contacts)

  return (
    <div>
        
        <ul className="list-group">
            {contacts.map(contact => <Item item={contact} key={contact.id} />)}
        </ul>
    </div>
  )
}

export default List