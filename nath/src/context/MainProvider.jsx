import { createContext, useState } from "react"



 export const MainContext=createContext()


function MainProvider({children}) {

   const [basket, setbasket] = useState([])
   const [wish, setwish] = useState([])


   function addbasket(item) {
    const element=basket.find( x=>x.id==item.id)
    if (!element) {

        
        setbasket([...basket,item])
    }


   }

   function deleteproducts(item) {
    setbasket([...basket.filter((x)=>x.id !== item.id)])
    
   }

   function addwishlist(item) {
   

    const list=wish.find((x)=>x.id==item.id)
    if(!list){

        setwish([...wish,item])
    }

    
   }
   function deletewish(item) {
    setwish([...wish.filter((x)=>x.id!==item.id)])
    
   }
  return (
    <div>
        
    <MainContext.Provider value={{basket,addbasket,deleteproducts,addwishlist,wish,deletewish}}>

    {children}
    </MainContext.Provider>

    </div>
  )
}

export default MainProvider