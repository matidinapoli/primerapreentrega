import Brand from "../components/Brand";
import ItemListContainer from "../components/ItemListContainer";
import CartWidget from "../components/CartWidget";

const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand />
            </div>

            <nav className="containerItemList">
                <ItemListContainer
                    itemUno="Niños"
                    itemDos="Adultos"
                    itemTres="Como Comprar"
                    itemCuatro="Contacto"
                />
            </nav>

            <div className="containerCart">
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar;