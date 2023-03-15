import Item from './Item'

const ItemList = ({productos}) => {

    console.log(productos);

  return (
    <>
      {productos?.map((producto) => {
        <Item
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          categoria={producto.categoria}
          marca={producto.marca}
          stock={producto.stock}
          imagen={producto.imagen}
          precio={producto.precio}
          descripcion={producto.descripcion}
        />
      })}
    </>
  )
}

export default ItemList