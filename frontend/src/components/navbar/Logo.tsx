import reactLogo from "../../assets/logo.png";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo-container">
      <div className="logo-circle">
        <button type="button">
          <img src={reactLogo} alt="Logo" />
        </button>
      </div>
    </div>
  );
}

export default Logo;
