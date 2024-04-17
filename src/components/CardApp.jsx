
import gameImage from "../assets/gameImage.png";

export function CardApp() {
  return (
      <div className="cardApp">
        <img src={gameImage} alt="gameImage" />
        <div className="activeEl">
          <h2>Game1</h2>
          <h3>➞</h3>
        </div>
      </div>
  );
}
