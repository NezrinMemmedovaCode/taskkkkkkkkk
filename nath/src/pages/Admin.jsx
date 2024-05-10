import React, { useEffect, useState } from 'react'
import "./Admin.scss"
function Admin() {

 const [adminpage, setadminpage] = useState([])

useEffect(() => {
    fetch("http://localhost:3000/products" )
    .then(res=>res.json())
    .then(data=>setadminpage(data))
}, [])

function deleteadmin(id) {
    fetch("http://localhost:3000/products/"+id ,{
        method:"DELETE",
    })
    .then(res=>res.json())
    .then(data=>setadminpage(data))
    
}

 
  return (
    <div className='admin'>
        {adminpage.map((x)=><div className='cart'>
            <tr>
                <td><img src={x.image} alt="" /></td>
                <td>{x.category}</td>
                <td>{x.title}</td>
                <td>{x.price}</td>
                <td><button onClick={()=>deleteadmin(x.id)} >delete</button></td>
              
            </tr>
        </div>)}


  



    </div>
  )
}

export default Admin