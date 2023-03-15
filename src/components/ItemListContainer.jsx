import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import productos from './productos.json'


const ItemListContainer = () => {

  const getProductos = () => {
    return new Promise ((resolve, reject) => {
      if (productos.length === 0){
        reject(new Error("No hay productos."))
      }
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    })
  }

  async function fetchingProductos(){
    try{
      const productosFetched = await getProductos();
    }catch(err){
      console.log(err);
    }
  }

  fetchingProductos();

  return (
    <div>
      <ItemCount/>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer