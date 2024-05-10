import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Basket from './pages/Basket';
import MainProvider from './context/MainProvider';
import Addproducts from './pages/Addproducts';
import WishList from './pages/WishList';
import Admin from './pages/Admin';

function App() {

  return (
    <>

    <MainProvider>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="Basket" element={<Basket />} />
          <Route  path="Addproducts" element={<Addproducts />} />
          <Route path="WishList" element={<WishList />} />
          <Route path="Admin" element={<Admin />} />
         
        </Route>
        
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </>
  )
}

export default App
