import "./Header.css";
import IconFullscreen from "../../assets/icon-fullscreen.svg";
import IconMinimize from "../../assets/icon-minimize.svg";
import IconClose from "../../assets/icon-close.svg";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__heading">Text Manager</h1>
      <ul className="header__control">
        <li className="header__control-button">
          <img
            className="header__icon header__icon--minimize"
            src={IconMinimize}
            alt=""
          />
        </li>
        <li className="header__control-button">
          <img
            className="header__icon header__icon--fullscreen"
            src={IconFullscreen}
            alt=""
          />
        </li>
        <li className="header__control-button">
          <img
            className="header__icon header__icon--close"
            src={IconClose}
            alt=""
          />
        </li>
      </ul>
    </header>
  );
}
