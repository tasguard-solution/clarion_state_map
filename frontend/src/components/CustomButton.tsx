// src/components/CustomButton.tsx
// A reusable "shadowed" button used across the app.
// Accepts text, an optional click handler, and an optional href (renders an <a> tag instead).

import "./CustomButton.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string; // if set, renders an anchor tag instead of a button
}

function CustomButton({ text, onClick, href }: ButtonProps) {
  return (
    <div className="custom-button-container" onClick={!href ? onClick : undefined}>
      {href ? (
        <a href={href} className="custom-button-btn">
          {text}
        </a>
      ) : (
        <button className="custom-button-btn" onClick={onClick}>
          {text}
        </button>
      )}
      <div className="custom-button-shadow"></div>
    </div>
  );
}

export default CustomButton;
