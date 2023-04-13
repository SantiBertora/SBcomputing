import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Loading from './loading'

const ItemDetailContainer = () => {

  const {id} = useParams()
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const unProducto = doc(db, "productos", `${id}`);

    getDoc(unProducto).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data()
        setProducto(docs);
        setLoading(false);
      }
    });
  }, []);

  if(loading) {
    return (
      <div>
        <Loading/>
      </div>
    )
  } else {
  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
  )
  }
}

export default ItemDetailContainer