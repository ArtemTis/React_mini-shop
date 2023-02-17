import React from 'react'
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (orders, onDelete) => {
  let sum = orders.reduce((acc, el) => acc + +el.price, 0)

  return (
    <div>
      {orders.map(el => (
        <Order key={el.id} item={el} onDelete={onDelete} />
      ))}
      <p className='sum'>Сумма: {sum.toFixed(2)}$</p>
    </div>
  )
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>Корзина пуста</h2>
  </div>)
}

// const closeCart = (e, ref) => {
//   let isOpen = e.target.closest('.shop-cart');
//   if (!isOpen) {
//     // set(false);
//     console.log(ref.current.className);
//   }
// }
//onClick={e => closeCart(e, close)}

const Header = ({ orders, onDelete }) => {

  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
        
        {cartOpen &&
          <div className='shop-cart'>
            {orders.length > 0
              ? showOrders(orders, onDelete)
              : showNothing()}
          </div>
        }
      </div>
      <div className='presentation'></div>
    </header>
  )
}

export default Header