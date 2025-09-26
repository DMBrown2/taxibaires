import Header from '../../Layout/Header/Header'
import Banner from '../../Layout/Banner/Banner'
import Servicios from '../Servicios/Servicios'
import SobreNosotros from '../Nosotros/Nosotros'
import Footer from '../../Layout/Footer/Footer'
import Reseñas from '../Reseñas/Reseñas'
import Contacto from '../Contacto/Contacto'



export default function Inicio() {
  return (
    <>
      <Header />
      <Banner />
      <Servicios />
      
      {/* SOBRE NOSOTROS CON FOTOS DE FLOTA Y PORQUE ELEGIRNOS */}
      <SobreNosotros /> 
      {/* RESEÑAS */}
      <Reseñas />

      {/* CONTACTANOS */}
      <Contacto />

      <Footer />

     



    </>
  )
}
