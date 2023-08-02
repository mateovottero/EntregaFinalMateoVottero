import 'bootstrap/dist/css/bootstrap.css'
import NavBar from "./components/Navbar";
import ListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from  'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
       <Routes>
        <Route path='/' element={ <ListContainer title="Bienvenido a Mendoza Gaming" subTitle="No te dejes ganar por tus componentes!"/>} />
        <Route path='/category/:categoryId' element={<ListContainer title="Bienvenido a la categoría: "/>}/>
        <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    </>)
}

export default App;
