import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Nav.scss"
import { MainContext } from '../context/MainProvider'

function Nav() {
    
    const {basket,wish}=useContext(MainContext)

  return (
    <div className='Nav'>
        <Link to={"/"}>Home</Link>
        <Link to={"/Basket"}>Basket {basket.length} </Link>
        <Link to={"/Addproducts"}>Addproducts</Link>
        <Link to={"/WishList"}>WishList {wish.length} </Link>
        <Link to={"/Admin"}>Admin</Link>

    </div>
  )
}

export default Nav