import "./Footer.css";
import iconText from "../../assets/icon-text.png";

export default function Footer() {
  const now = new Date();

  return (
    <footer className="footer">
      <div className="footer__text-manager">
        <img src={iconText} alt="icon-text" />
        <p>Text Manager</p>
      </div>
      <div className="footer__tray">
        <p>
          {now.toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>
        <p>
          {now.toLocaleTimeString("de-DE", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </footer>
  );
}
