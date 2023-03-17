import React from 'react'
import ItemList from './ItemList'
import productos from './productos.json'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

  const {categoria}  = useParams();
  console.log(categoria)

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

  const productosFiltrados = productos.filter((producto) => (producto.categoria.toLowerCase()) === categoria)
  
  let productosARenderizar = [];
  if(categoria) {
    productosARenderizar = productosFiltrados
  } else {
    productosARenderizar = productos
  }

  return (
    <div>
      <ItemList productos={productosARenderizar}/>
    </div>
  )
}

export default ItemListContainer