import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faShieldAlt, faCarSide, faMoneyCheck } from "@fortawesome/free-solid-svg-icons"; 
import "./Nosotros.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Corolla from "../../assets/images/flota/corolla.jpeg";
import Van from "../../assets/images/flota/van.avif";
import Kangoo from "../../assets/images/flota/kangoo.jpg";
import ChevroletSpin from "../../assets/images/flota/chevrolet-spin.avif";
import Button from "../../components/Button/Button";


export default function SobreNosotros() {
  const flota = [
    {
      nombre: "Toyota Corolla",
      descripcion: "Cómodo y eficiente, ideal para traslados urbanos y aeropuerto.",
      imagen: Corolla,
    },
    {
      nombre: "Camioneta Van",
      descripcion: "Espacioso y elegante, perfecto para viajes grupales.",
      imagen: Van,
    },
    {
      nombre: "Chevrolet Spin",
      descripcion: "Vehículo familiar con amplio espacio para equipaje.",
      imagen: ChevroletSpin,
    },
    {
      nombre: "Kangoo",
      descripcion: "Vehículo familiar con amplio espacio para equipaje.",
      imagen: Kangoo,
    },
  ];

  const caracteristicas = [
    {
      icon: faClock,
      titulo: "Disponibilidad 24/7",
      descripcion: "Estamos siempre listos para tu viaje, a cualquier hora.",
    },
    {
      icon: faShieldAlt,
      titulo: "Seguridad Garantizada",
      descripcion: "Vehículos controlados y choferes profesionales.",
    },
    {
      icon: faCarSide,
      titulo: "Comodidad y Espacio",
      descripcion: "Vehículos modernos, amplios y confortables.",
    },
    {
      icon: faMoneyCheck,
      titulo: "Aceptamos todos los medios de pago",
      descripcion: "Efectivo, tarjetas y transferencias.",
    },
  ];

  return (

    <>
   
    <section id="sobre-nosotros" className="sobre-nosotros-section">
      <div className="sobre-nosotros-container">
        <SectionTitle
          titulo="Sobre Nosotros"
          descripcion="Somos una flota de taxis comprometida con la seguridad, comodidad y puntualidad de cada viaje. Con vehículos modernos y choferes profesionales, nos adaptamos a todas tus necesidades."
          />

        <div className="flota-grid">
          {flota.map((vehiculo, index) => (
              <div key={index} className="vehiculo-card">
              <img src={vehiculo.imagen} alt={vehiculo.nombre} className="vehiculo-img" />
              <div className="vehiculo-content">
                <h3 className="vehiculo-nombre">{vehiculo.nombre}</h3>
                <p className="vehiculo-descripcion">{vehiculo.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="nosotros-cta">
          <Button variant="primary" size="medium">
          Reservá tu viaje
        </Button>
        </div>

        
      </div>
    </section>          

      <div className="porque-elegirnos-container">
        <SectionTitle
          titulo="¿Por qué elegirnos?"
          descripcion="Elegirnos significa optar por un servicio de transporte confiable, seguro y cómodo. Nos enorgullece ofrecer una experiencia de viaje excepcional, adaptada a tus necesidades específicas."
          />

        <div className="caracteristicas-grid">
          {caracteristicas.map((item, index) => (
              <div key={index} className="caracteristica-card">
              <FontAwesomeIcon icon={item.icon} className="icono" />
              <h4>{item.titulo}</h4>
              <p>{item.descripcion}</p>
            </div>
          ))}
        </div>

           <div className="porqueelegirnos-cta">
          <Button variant="primary" size="medium">
          Contactar
        </Button>
        </div>
      </div>


</>
  );
}
