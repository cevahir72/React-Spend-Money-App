import React from 'react'
import BasketItem from './BasketItem';
import "./Basket.css"

function Basket({resetBasket, total, basket, products}) {
  return (
    <div className='basket'>
        <div className="head">
        <h2>Cart Summary</h2>
        </div>
        <ul>
          { basket.map(item=>(
            <BasketItem key={item.id} item={item} product={products.find(p=>p.id === item.id)}/>
          ))}
        </ul>
          <div className="total">
            <h3>Total: ${total}</h3>
          </div>
          <div className="button">
          <button onClick={resetBasket}>Reset Cart</button>
          </div>
        

        

    </div>
  )
}

export default Basket