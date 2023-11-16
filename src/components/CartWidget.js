import cart from "../components/cart-outline.svg"

const CartWidget = () =>{
    return(
        <div className="containerLength">
            <img src={cart} alt="cart"></img>
            <span className="cantCart">
                1
            </span>
        </div>
    )
}

export default CartWidget