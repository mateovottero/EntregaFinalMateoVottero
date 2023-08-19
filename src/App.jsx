import 'bootstrap/dist/css/bootstrap.css'
import NavBar from "./components/Navbar";
import ListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from  'react-router-dom'
import React, {useEffect} from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './service/firebase';
import {list} from './mock/data';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  // useEffect(()=>{
  //   const colectionProductos =collection(db,'productos')
  //   list.map((item)=> addDoc(colectionProductos, item))
  // },[])
    return (
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={ <ListContainer title="Bienvenido a Mendoza Gaming" subTitle="No te dejes ganar por tus componentes!"/>} />
            <Route path='/category/:categoryId' element={<ListContainer title="Bienvenido a la categoría: "/>}/>
            <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/Checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    )
  }

  export default App;
