import { Routes, Route } from 'react-router';
import Main from './Layout/Main/Main';
import Inicio from './pages/Inicio/Inicio';
import Contacto from './pages/Contacto/Contacto';
import Nosotros from './pages/Nosotros/Nosotros';
import Servicios from './pages/Servicios/Servicios';
import Reseñas from './pages/Reseñas/Reseñas';
import FloatingButtons from './components/FloatingButtons/FloatingButtons';




function App() {



  return (
    <>
      <Routes>

        <Route path="/" element={<Main />}>

          <Route index element={<Inicio />} />

          <Route path="/servicios" element={<Servicios />} />
          
          <Route path="/contacto" element={<Contacto />} />
         
          <Route path="/nosotros" element={<Nosotros />} />

          <Route path="/reseñas" element={<Reseñas />} />


    
          
          <Route path="*" element={<h1>404</h1>} />

          </Route>
      </Routes>
      <FloatingButtons />
    </>
  )
}

export default App;