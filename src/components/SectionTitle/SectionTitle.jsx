import "./SectionTitle.css";

export default function SectionTitle({ titulo, descripcion }) {
  return (
    <div className="section-title">
      <h2 className="section-title-heading">{titulo}</h2>
      <p className="section-title-description">{descripcion}</p>
    </div>
  );
}
