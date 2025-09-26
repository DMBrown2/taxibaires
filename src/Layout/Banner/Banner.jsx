import taxiHeader from '../../assets/images/banner/banner1.jpg';
import Button from '../../components/Button/Button';
import './Banner.css';

export default function Banner() {
  return (
    <section className="section-banner" style={{ backgroundImage: `url(${taxiHeader})` }}>
      <div className="overlay">
        <div className="banner-content">
          <h1 className="titulo-banner">Tu taxi de confianza</h1>
          <p className="parrafo-banner">Viajá seguro, de la mano de los mejores</p>
          <Button variant="primary" size="large">Reservá tu viaje</Button>
        </div>
      </div>
    </section>
  );
}

