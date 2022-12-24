import Brand from "./Brand";
import { ItemList } from "./ItemList";
import Cart from "./Cart";
import './navecional.scss';
function Navegacional(){
    return(
        <nav className="nav">
            <div className="nav_containerBrand">
                <Brand marca="MERAKI"/>
            </div>
            <div className="nav_containerItemlist">
                <ItemList  
                item1="INICIO"
                item2="LIBROS"
                item3="OFERTAS"
                item4="CONTACTOS"
                item5="ACERCA DE NOSOTROS"
                />
            </div>
            <div className="nav_containerCart">
                <Cart></Cart>
            </div>
        </nav>
    )
}
export default Navegacional;