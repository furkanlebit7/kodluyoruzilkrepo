import React from 'react'
import { useSelector } from "react-redux";

function Money() {

const money = useSelector((state)=>state.bank.money);


  return (
    <div className='money mt-2 g-bg'>
        <h1>${money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h1>
    </div>
  )
}

export default Money