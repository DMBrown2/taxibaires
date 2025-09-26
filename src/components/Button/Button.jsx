import "./Button.css";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
}) {
  return (
    <button className={`custom-btn ${variant} ${size}`}  
    type={type} 
    onClick={onClick}
    >
      {children}
    </button>
  );
}