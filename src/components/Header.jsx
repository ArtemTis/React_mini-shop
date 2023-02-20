import React from 'react'
import { useState, useRef } from 'react';
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


const Header = ({ orders, onDelete }) => {

  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef()

  const closeCart = (e) => {
    let isOpen = e.target.closest('.shop-cart');

    if (!isOpen) {
      setCartOpen(false);
    }
  }

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
          <div className='shop-cart__wrap' ref={cartRef} onClick={e => closeCart(e)}>
            <div className='shop-cart'>
              {orders.length > 0
                ? showOrders(orders, onDelete)
                : showNothing()}
            </div>
          </div>
        }
      </div>
      <div className='presentation'></div>
    </header>
  )
}

export default Header