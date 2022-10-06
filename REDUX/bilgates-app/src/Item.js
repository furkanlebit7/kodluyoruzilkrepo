import { useState, } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { buy, sell } from './redux/bank/bankSlice';


function Item({item}) {

const dispatch = useDispatch();
const money = useSelector((state)=>state.bank.money);

const [piece, setPiece] =useState(0)

// const  sellItem = (item) =>{
//         setPiece(piece - 1)
//         dispatch(sell(item.price))
// }

// const  buyItem = (id) =>{
//     setPiece(piece + 1)
//     dispatch(buy(item.price))
// }

const inputHandler = (value) => {
  setPiece(parseInt(value))
}

const valueHandler = (value) => {
  if(value > 0) {
    return value.toString().replace(/^0+/,"");
  }
  return 0;
}


  return (
    <div className='item'>
        <img src={item.link} alt={item.name} />
        <p>{item.name}</p>
        <p className='g-text'>${item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p>
        <div className='buttons'>
            <button 
            className={piece > 0 ? "r-bg":"item-sell"}  
            disabled={piece===0}
            onClick={()=>setPiece(piece-1)}
            >
              Sell
            </button>
            <input 
            className='item-piece' 
            pattern="\d*"
            type="number" 
            value={valueHandler(piece)}
            min={0} 
            onChange={(event)=>inputHandler(event.target.value)}
            />
            <button 
            className={item.price>money?"gr-bg":"item-buy"} 
            disabled={money<item.price} 
            onClick={()=>setPiece(piece+1)}
            >
              Buy
            </button>
        </div>
    </div>
  )
}

export default Item