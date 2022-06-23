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
import CartContextProvider from './Components/CartContext/CartContext';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='/Productos' element={<Productos />} />
            <Route path='/categoria/:category' element={<Productos />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/detail/:idItem' element={<ItemDetailContainer />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
          <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
