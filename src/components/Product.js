import React from 'react';
import "./Product.css";

function Product({product, basket, setBasket, money, total}) {

    const basketItem = basket.find(item=> item.id === product.id)

    const addBasket = ()=> {

        const checkBasket = basket.find(item=> item.id === product.id)

        if(checkBasket) {
            checkBasket.amount +=1
            setBasket([...basket.filter(item=> item.id !== product.id), checkBasket])
        }else {
            setBasket([...basket.filter(item=> item.id !== product.id),
            {
                id: product.id,
                title: product.title,
                amount: 1
            }])
        }

    }

    const removeBasket = ()=> {

        const currentBasket = basket.find(item=> item.id === product.id)
        const basketWithoutCurrent = basket.filter(item=> item.id !== product.id)
        currentBasket.amount -=1

        if(currentBasket === 0) {
            setBasket([...basketWithoutCurrent])
        }else{
            setBasket([...basketWithoutCurrent,currentBasket])
        }
    }


  return (
    <div className='product'>
        <img src={product.image} alt="" width={600}/>
        <h1>${product.price}</h1>
        <h3>{product.title}</h3>
        <div className="actions">
            <button disabled={!basketItem} onClick={removeBasket}>-</button>
            <span>{basketItem && basketItem.amount || 0}</span>
            <button disabled={ total + product.price > money} onClick={addBasket}>+</button>
        </div>

    </div>
  )
}

export default Product