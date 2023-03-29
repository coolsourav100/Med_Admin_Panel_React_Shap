import React, { useContext } from 'react';
import CartContext from '../../Store/cart-contex';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCTX = useContext(CartContext)
  // console.log(cartCTX,'cart')

const onAddItem=(data)=>{
  // console.log(data ,'cart')
cartCTX.editItem({
  id:data.id,
  name:data.name,
  amount:1,
  price:data.price
})
}

const onRemoveItem =(id)=>{
cartCTX.removeItem(id)
}

    const cartItems =<ul className={classes['cart-items']}>{cartCTX.item.map((item)=><li><CartItem data={item} onRemove={onRemoveItem} onAdd={onAddItem}/></li>)}</ul>
  return (
    <Modal onHide={props.onHide}>
        {cartItems}
        <div  className={classes.total}>
            <span>Total</span>
            <span>{`₹${cartCTX.totalAmount}`}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHide}>Close</button>
            <button className={classes.button}>Generate Bill</button>
        </div>
        </Modal>
  )
}

export default Cart