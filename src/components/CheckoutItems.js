import React from 'react'
import BasketItem from './BasketItem'

function CheckoutItems({ basketItems }) {
  return (
    <div className='bg-gray-400'>
      {basketItems.map((item) => (
        <BasketItem key={item.id} {...item} />
      ))}
    </div>
  )
}

export default CheckoutItems
