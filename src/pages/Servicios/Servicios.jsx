import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Button from "../../components/Button/Button";
import "./Servicios.css";
import fotoAeropuerto from '../../assets/images/servicios/aeropuerto.jpg'
import fotoTurismo from '../../assets/images/servicios/turismo.jpg'
import fotoLargaDistancia from '../../assets/images/servicios/larga-distancia.jpg'

export default function Servicios() {
  const servicios = [
    {
      titulo: "Traslados al Aeropuerto",
      descripcion:
        "Servicio puntual y seguro hacia y desde Ezeiza.",
      imagen: fotoAeropuerto,
    },
    {
      titulo: "City Tours",
      descripcion:
        "Recorridos por puntos turísticos de la ciudad con choferes experimentados.",
      imagen: fotoTurismo,
    },
      {
      titulo: "Viajes larga distancia",
      descripcion:
        "Traslados cómodos y seguros a destinos fuera de la ciudad.",
      imagen: fotoLargaDistancia,
    },
  ];

  return (
    <section id="servicios" className="servicios-section">
      <div className="servicios-container">
     <SectionTitle
          titulo="Nuestros Servicios"
          descripcion="Ofrecemos soluciones de traslado confiables y adaptadas a cada
          necesidad, con una flota moderna y choferes profesionales."
        />

        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div key={index} className="servicio-card">
              <img
                src={servicio.imagen}
                alt={servicio.titulo}
                className="servicio-img"
              />
              <div className="servicio-content">
                <h3 className="servicio-titulo">{servicio.titulo}</h3>
                <p className="servicio-descripcion">{servicio.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="servicios-cta">
  <Button variant="primary" onClick={() => window.location.href = "#contacto"}>
    Consultá otros destinos
  </Button>
</div>

      </div>
    </section>
  );
}
