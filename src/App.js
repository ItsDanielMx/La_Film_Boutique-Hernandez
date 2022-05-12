import './App.css';
import { BrowserRouter as Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navegacion/Navbar'
import Inicio from './Components/Pages/Inicio'
import Contacto from './Components/Pages/Contacto'
import Productos from './Components/Pages/Productos'
import AboutUs from './Components/Pages/AboutUs'
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';

const App = () => {
  return (
    <BrowserRouter className="App">
        <Navbar />
        <Routes>
          <Route path='/Inicio' element={<Inicio />} />
          <Route path='/Contacto' element={<Contacto />} />
          <Route path='/Productos' element={<Productos />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
