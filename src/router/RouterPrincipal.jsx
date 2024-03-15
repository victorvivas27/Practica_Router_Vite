import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayOut from '../components/layout/LayOut'
import Home from "../components/pages/home/Home"
import Beers from '../components/common/beers/Beers'
import Contacto from '../components/pages/contacto/Contacto'
import Producto from '../components/pages/producto/Producto'
import Detalle from '../components/pages/detalle/Detalle'
import Login from '../components/pages/login/Login'



const RouterPrincipal = () => {
  return (
    <>
    <Routes>
      <Route element={<LayOut/>}>
        <Route path="/" element={<Home/>} />
        <Route path='/beers'element={<Beers/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/productos' element={<Producto/>}/>
        <Route path='/detalle/:detalleId' element={<Detalle/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>  {/*esta ruta es para que siempre tenga una ruta */}
        
    </Routes>
    </>
  )
}

export default RouterPrincipal