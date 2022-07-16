import Header from "./components/Header";
import {useState, useEffect} from "react";
import products from "./helper/products.json";
import Product from "./components/Product"
import Basket from "./components/Basket";
import './App.css';

function App() {

  const [money, setMoney] = useState(5000)

  const [basket, setBasket] = useState([])

  const [ total, setTotal] = useState(0)

  useEffect(() => {

    setTotal(
      basket.reduce((acc,item)=>{
        return acc + (item.amount * (products.find(product=> product.id === item.id).price))
      },0)
    ) 
    console.log(basket);

  }, [basket])

  const resetBasket = ()=>{

    setBasket([])
  }
  

    
  return (
    <div className="App">
      <h1>React - Money Spending App!</h1>
      <Header money= {money} total={total}/>
      <div className="products">
      {
        products.map(product=>(
          <Product key={product.id} product={product} basket={basket} setBasket= {setBasket} money={money} total ={total}/>
        ))
      }
      </div>
      
      <Basket resetBasket={resetBasket} total={total} basket= {basket} products={products}/>
      
    </div>
    
  );
  }

export default App;
