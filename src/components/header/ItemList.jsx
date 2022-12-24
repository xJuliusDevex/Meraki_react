function ItemList(props){
    return(
        <>
        <ul className="nav_containerItemlist-ul">
            <li className="nav_containerItemlist-ul-li">{props.item1}</li>
            <li className="nav_containerItemlist-ul-li">{props.item2}</li>
            <li className="nav_containerItemlist-ul-li">{props.item3}</li>
            <li className="nav_containerItemlist-ul-li">{props.item4}</li>
            <li className="nav_containerItemlist-ul-li">{props.item5}</li>
        </ul>
        </>
    )
}
export{ItemList};