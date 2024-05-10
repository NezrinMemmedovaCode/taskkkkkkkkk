import React, { useContext } from 'react'
import { MainContext } from '../context/MainProvider'

function Basket() {

   const {basket ,deleteproducts}=useContext(MainContext)

    

   


  return (
    <div className='cards'>

{basket.map((x)=><div className='card' key={x.id}> 
        <img src={x.image} alt="" />
        <h1>{x.category}</h1>
        <h2>{x.title}</h2>
        <h3>{x.price}</h3>
        <button onClick={()=>deleteproducts(x)}>delete</button>

        </div>)}

    </div>
  )
}

export default Basket