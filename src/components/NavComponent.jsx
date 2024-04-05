import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/loggo.png";
export function NavComp({ activeEl, setter }) {
  return (
    <nav>
      <img
        src={logo}
        alt="logo"
        onClick={() => {
          setter("tarif");
        }}
      />

      <ul>
        <li
          onClick={() => {
            setter("games");
          }}
        >
          GAMES&APPS
        </li>
        <li>MARKET</li>
        <li>SETTINGS</li>
      </ul>
    </nav>
  );
}
