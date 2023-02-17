import React from 'react'
import { FaTrash } from "react-icons/fa";

const Order = ({ item, onDelete }) => {
    return (
        <div className='item'>
            <img src={'./img/' + item.img} alt={'img ' + item.title} />
            <h2>{item.title}</h2>
            <b>{item.price}$</b>
            <FaTrash className='delete-icon' onClick={() => onDelete(item.id)}/>
        </div>
    )
}

export default Order