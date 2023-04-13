import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Loading from './loading'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const {categoria}  = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const productosCollection = collection(db, "productos");
    getDocs(productosCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProductos(docs);
      setLoading(false);
    });
  }, []);

  const productosFiltrados = productos.filter((producto) => (producto.categoria.toLowerCase()) === categoria)
  
  let productosARenderizar = [];
  if(categoria) {
    productosARenderizar = productosFiltrados
  } else {
    productosARenderizar = productos
  }

  if(loading) {
    return (
      <div className='spinner'>
        <Loading/>
      </div>
    )
  } else {
  return (
    <div>
      <ItemList productos={productosARenderizar}/>
    </div>
  )
  }
}

export default ItemListContainer