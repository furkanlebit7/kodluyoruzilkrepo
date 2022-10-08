import {  useEffect, useState, } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { managaCart } from '../redux/bank/bankSlice';


function Item({item}) {

  const dispatch = useDispatch();

const money = useSelector((state)=>state.bank.money);
const [piece, setPiece] =useState(0)

const maximumal = Math.floor(money/item.price);
const maximum = piece + Number(maximumal);

useEffect(()=> {
  dispatch(managaCart({item,piece}));
},[piece])

const handleChange = (value) =>{
   let val = parseInt(value)
   console.log(val);
 if(val>maximum && money>0 ){
      setPiece(maximum)
  }else{
    setPiece(val)
  }
  
}

const valueHandler = (value) => {
  if(value > 0) {
    return (value.toString().replace(/^0+/,""))
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
            onClick={()=>handleChange(piece-1)}
            >
              Sell
            </button>
            <input 
            className='item-piece' 
            pattern="\d*"
            type="number" 
            value={valueHandler(piece)}
            min={0} 
            onChange={(e)=>handleChange(e.target.value)}
            />
            <button 
            className={item.price>money?"gr-bg":"item-buy"}
            disabled={money<item.price}
            onClick={()=>handleChange(piece+1)}
            >
              Buy
            </button>
        </div>
    </div>
  )
}

export default Item