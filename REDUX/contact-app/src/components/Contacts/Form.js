import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addContact, contactSelectors } from '../../redux/contactSlice';

function Form() {

    const dispatch = useDispatch();


    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(!name || name.length<3 || !phone) return false;

        dispatch(addContact({id:nanoid(), name, phone_number:phone}))
        setName("");
        setPhone("");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input className="form-control" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input className="form-control mt-3" placeholder='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <button className='btn btn-primary my-3' type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Form