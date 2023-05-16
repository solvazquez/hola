import './Item.css'

const Item = ({ id, nombre, autor, precio, img }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h3 className='nombreProducto' > {nombre}</h3>
            <p>Autor: {autor} </p>
            <p>Precio: {precio} </p>
            <p>ID: {id} </p>
            <button className='btnProducto'> Ver Detalles </button>
        </div>
    )
}

export default Item