import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/loggo.png";
import { useState } from "react";
export function NavComp({ activeEl, setter }) {
  let [isClicked, setIsClicked] = useState("logo");
  return (
    <nav>
      <img
        src={logo}
        alt="logo"
        onClick={() => {
          setIsClicked("logo");
          setter("tarif");
        }}
      />

      <ul>
        <li
          className={isClicked == "games" ? "actNav" : ""}
          onClick={() => {
            setIsClicked("games");
            setter("games");
          }}
        >
          GAMES&APPS
        </li>
        <li
          className={isClicked == "market" ? "actNav" : ""}
          onClick={() => {
            setIsClicked("market");
            setter("market");
          }}
        >
          MARKET
        </li>
        <li
          className={isClicked == "settings" ? "actNav" : ""}
          onClick={() => {
            setIsClicked("settings");
            setter("settings");
          }}
        >
          SETTINGS
        </li>
      </ul>
    </nav>
  );
}
