import './ItemDetail.css'

const ItemDetail = ({id, nombre, autor, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>Autor: {autor} </h3>
        <h3> ID: {id} </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum odit omnis modi consectetur beatae placeat a optio inventore cumque quod aspernatur sequi accusamus hic labore, vitae debitis blanditiis ad quisquam?</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail