import React from 'react'

const Item = ({ item, onAdd, onShowItem }) => {
  return (
    <div className='item'>
      <img src={'./img/' + item.img} alt={'img ' + item.title} onClick={() => onShowItem(item)} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}$</b>
      <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>
    </div>
  )
}

export default Item