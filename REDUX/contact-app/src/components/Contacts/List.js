import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { contactSelectors, removeAllContacts } from '../../redux/contactSlice'
import Item from './Item'

function List() {

  const dispatch = useDispatch();

  const contacts = useSelector(contactSelectors.selectAll)
  const countContacts = useSelector(contactSelectors.selectTotal)

  const handleRemoveAll = () =>{
    dispatch(removeAllContacts())
  }

  return (
    <div className='d-flex flex-column w-50  m-auto'>
        
        <ul className="list-group">
            {contacts.map(contact => <Item item={contact} key={contact.id} />)}
        </ul>
        {countContacts>0 &&<p className='text-danger align-self-end mt-2' onClick={()=>handleRemoveAll()} style={{cursor:"pointer"}}><ins>Remove All</ins></p>}
    </div>
  )
}

export default List