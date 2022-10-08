import React from 'react'
import { useSelector } from "react-redux";

function Receipt() {
    const money = useSelector((state)=>state.bank.money);
    const cart = useSelector((state)=>state.bank.cart);

    const getTotal = () =>{
        return 100000000000-money;
    }

  return (
    <div className='receipt mt-2 c-bg'>
        <h1>Your Receipt</h1>
        <div className='receipt-list'>
            {cart.map((cr)=>{
                if(cr.count>0){
                    return (<div  className='receipt-list-up' key={cr.id}>
                    <p>{cr.name}</p>
                    <p>x{cr.count}</p>
                    <p className='g-text'>${(cr.price*cr.count).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
                </div>)
                }
            })}
            <hr/>
            <div className='receipt-list-down'>
                <p>TOTAL</p>
                <p className='g-text'>${getTotal().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
            </div>
        </div>
    </div>
  )
}

export default Receipt