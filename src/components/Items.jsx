import React from 'react'
import Item from './Item'

const Items = ( {items, onAdd, onShowItem} ) => {
    return (
        <main>
            {items.map(el =>(
                <Item key={el.id} item = {el} onAdd={onAdd} onShowItem={onShowItem}/>
            ))}
        </main>
    )
}

export default Items