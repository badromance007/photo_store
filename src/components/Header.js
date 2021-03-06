import {useContext} from "react"
import {Link} from "react-router-dom"
import {CartContext} from "../contexts/CartContext"

function Header() {
    const {cartItems} = useContext(CartContext)
    const cartClassName = cartItems.length ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>
            <h2><Link to="/">Photo Store</Link></h2>
            <Link to="/cart">
                <i className={`${cartClassName} ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}

export default Header
