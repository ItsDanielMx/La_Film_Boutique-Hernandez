import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navegacion/Navbar'
import Inicio from './Components/Pages/Inicio'
import Contacto from './Components/Pages/Contacto'
import Productos from './Components/Pages/Productos'
import AboutUs from './Components/Pages/AboutUs'
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact components={Inicio}/>
          <Route path='/Contacto' exact components={Contacto}/>
          <Route path='/Productos' exact components={Productos}/>
          <Route path='/AboutUs' exact components={AboutUs}/>
          <Route path='/Login' exact components={Login}/>
          <Route path='/SignUp' exact components={SignUp}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
