import React from 'react'

const ShowFullItem = ({ item, onAdd, onShowItem }) => {
    return (
        <div className='full-item' onClick={() => onShowItem(item)}>
            <div className='item-content'  onClick={e => e.stopPropagation()}>
                <img src={'./img/' + item.img} alt={'img ' + item.title}/>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <b>{item.price}$</b>
                <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>
            </div>
        </div>
    )
}

export default ShowFullItem