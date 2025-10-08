import { useRef, useState, useEffect } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Reseñas.css";
import Button from "../../components/Button/Button";

const reseñas = [
     {
    id: 1,
    nombre: "María González",
    foto: 'https://randomuser.me/api/portraits/women/44.jpg',
    estrellas: 5,
    texto: "Servicio excelente, puntual y muy cordial."
  },
  {
    id: 2,
    nombre: "Carlos López",
    foto: 'https://randomuser.me/api/portraits/men/65.jpg',
    estrellas: 4,
    texto: "Muy buen servicio, el auto estaba impecable."
  },
  {
    id: 3,
    nombre: "Ana Fernández",
    foto: 'https://randomuser.me/api/portraits/women/68.jpg',
    estrellas: 5,
    texto: "Me sentí muy segura, el conductor súper amable."
  },
  {
    id: 4,
    nombre: "Juan Pérez",
    foto: 'https://randomuser.me/api/portraits/men/32.jpg',
    estrellas: 5,
    texto: "Excelente experiencia, lo recomiendo totalmente."
  },
  ];


export default function Reseñas() {
  const scrollRef = useRef(null);
  const [activePage, setActivePage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Ajustar items por página según ancho
  useEffect(() => {
    const updateItems = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 4 : 1);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // Calcular número de páginas
  const totalPages = Math.ceil(reseñas.length / itemsPerPage);

  // Detectar página activa
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth } = scrollRef.current;
        const index = Math.round(scrollLeft / clientWidth);
        setActivePage(index);
      }
    };
    const el = scrollRef.current;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll al hacer click en un puntito
  const scrollToPage = (page) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: page * clientWidth,
        behavior: "smooth",
      });
    }
  };


  
  return (
    <section id="reseñas" className="section-reseñas">
      <div className="reseñas-container">
        <SectionTitle
          titulo="Reseñas"
          descripcion="Descubrí lo que dicen los clientes de nuestro servicio."
        />

     <div className="reseñas-scroll" ref={scrollRef}>
        {reseñas.map((r) => (
          <div key={r.id} className="reseña-card">
            <img src={r.foto} alt={r.nombre} className="reseña-foto" />
            <h3 className="reseña-nombre">{r.nombre}</h3>
            <div className="reseña-estrellas">
              {"★".repeat(r.estrellas)}{"☆".repeat(5 - r.estrellas)}
            </div>
            <p className="reseña-texto">{r.texto}</p>
          </div>
        ))}
      </div>

      {/* Indicadores (puntitos) */}
      <div className="reseñas-dots">
         {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activePage ? "active" : ""}`}
            onClick={() => scrollToPage(index)}
          />
        ))}      
      </div>

      <div className="ver-mas-container">
        <Button variant="outline" size="big" >
          Ver más reseñas
        </Button>

      
      </div>
      </div>
    </section>
  );
}
