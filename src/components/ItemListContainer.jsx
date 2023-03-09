import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
      {greeting}
      <ItemCount/>
    </div>
  )
}

export default ItemListContainer