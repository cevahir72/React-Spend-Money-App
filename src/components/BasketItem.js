import React from 'react'

function BasketItem({item, product }) {
  return (
    <div className='basketItem'>
        <h3> {product.title} x {item.amount}</h3>
    </div>
  )
}

export default BasketItem