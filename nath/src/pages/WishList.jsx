import React, { useContext, useEffect } from 'react'
import { MainContext } from '../context/MainProvider'

function WishList() {
     const {wish,setwish,deletewish}=useContext(MainContext)

      

  
    useEffect(() => {

        fetch("http://localhost:3000/products")
    .then(res=>res.json())
    .then(data=>setwish(data))

     
    }, [])
  

  return (
    <div className='cards'>

    {wish.map((x)=><div className='card' key={x.id}> 
    <img src={x.image} alt="" />
    <h1>{x.category}</h1>
    <h2>{x.title}</h2>
    <h3>{x.price}</h3> 
    <button onClick={()=>deletewish(x)}>removewishlist</button>
    </div>)}

</div>  )
}

export default WishList