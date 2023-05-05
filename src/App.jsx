import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navegador from './assets/components/Navegador'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './assets/views/Home';
import Contacto from './assets/views/Contacto';
function App() {


  return (

    <div className='Container'>
      <BrowserRouter>

        <Navegador />
        <div className="container">
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/contacto' element={<Contacto />} />
          </Routes>
        </div>


      </BrowserRouter>



    </div>
  )
}

export default App
