import React, { useContext, useEffect, useState } from 'react'
import "./Home.scss"
import { MainContext } from '../context/MainProvider'

function Home() {
    const [products, setproducts] = useState([])
    const {addbasket,addwishlist}=useContext(MainContext)

    useEffect(() => {
    fetch("http://localhost:3000/products")
    .then(res=>res.json())
    .then(data=>setproducts(data))
    }, [])
    


  return (
    <div className='cards'>

        {products.map((x)=><div className='card' key={x.id}> 
        <img src={x.image} alt="" />
        <h1>{x.category}</h1>
        <h2>{x.title}</h2>
        <h3>{x.price}</h3>
        <button onClick={()=>addbasket(x)}>addbasket</button>
        <button onClick={()=>addwishlist(x)}>WishList</button>

        </div>)}

    </div>
  )
}

export default Home