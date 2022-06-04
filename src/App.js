import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navegacion/Navbar'
import Footer from './Components/Footer/Footer';
import Inicio from './Components/Pages/Inicio'
import Contacto from './Components/Pages/Contacto'
import Productos from './Components/Pages/Productos'
import AboutUs from './Components/Pages/AboutUs'
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <BrowserRouter className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Contacto' element={<Contacto />} />
          <Route path='/Productos' element={<Productos />} />
          <Route path='/categoria/:categoryList' element={<Productos />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/detail/:idItem' element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
