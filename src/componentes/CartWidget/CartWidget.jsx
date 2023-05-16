import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-19.jpg";
  return (
    <div>
      <img className='imgCarrito' src ={imgCarrito} alt="Carrito" />
      <strong className="numero" >3 </strong>
    </div>
  )
}

export default CartWidget