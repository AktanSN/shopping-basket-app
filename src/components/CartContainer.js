import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearBag } from '../features/cart/cartSlice';
import CartItem from './CartItem';

function CartContainer() {

    const { cartItems, amount, total} = useSelector((store) => store.cart);
    const dispatch = useDispatch();



    return (
        <section className="cart">
                <header>
                    <h2>Your Bag</h2>
                   
                </header>
                <div>
                    {cartItems.map((item) => {
                        return <CartItem key={item.id} {...item}></CartItem>
                    })}
                </div>

                <footer>
                    <hr/>
                    <div className="cart-total">
                    <h4>total <span>$ {total}</span></h4>
                    </div>
                    <button className="btn clear-btn" onClick={() => dispatch(clearBag())}>clear cart</button>
                </footer>
            </section>
    )

    
}

export default CartContainer