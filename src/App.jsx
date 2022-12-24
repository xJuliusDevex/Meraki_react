import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import { Contactanos } from './components/contactecnos/contactanos';
import {Link} from "react-dom"
import Navegacional from './components/header/Navecional';
import { Item_list_container } from './components/container/item_list_conteiner';

function App() {
  return (
    <>
        <Navegacional></Navegacional>
        <Item_list_container saludo={'Falta contendor'}></Item_list_container>
    </>  
    );
}


export default App
