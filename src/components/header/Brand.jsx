import icon from '../../assets/icon_web/icon.png';
function Brand(props){
    return (
        <>
            <div className='nav_containerBrand_img'>
                <img  src={icon} alt="icono de la pagina" title='Meraki'/>
            </div>
            <span className='nav_containerBrand_text'>{props.marca}</span>
        </>
    )
}
export default Brand;