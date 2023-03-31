import React from 'react'
import { CartIcon } from '../icons'
import { useSelector } from 'react-redux'

function Navbar() {

    const {amount} = useSelector((store) => store.cart)

  return (
    <div>
        <nav className="nav-center">
            <h3>Redux Toolkit</h3>
            <div className="nav-container">
                <CartIcon> </CartIcon>
                <div className="amount-container">
                <p className="total-amount">{amount}</p>
            </div>
            </div>
            
        </nav>
    </div>
  )
}

export default Navbar