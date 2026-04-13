import appLogo from "../../assets/logo.png";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo-container">
      <div className="logo-circle">
        <button type="button">
          <img src={appLogo} alt="Logo" />
        </button>
      </div>
    </div>
  );
}

export default Logo;
