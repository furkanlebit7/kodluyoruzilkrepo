import React from 'react'
import Item from './Item.js'

import items from "../items.js"

function Market() {
  return (
    <div className='items mt-2'>
        {items.map(item=>(
            <Item item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Market