import launchImage from "../../assets/play_circle_outline.png";
import gameImage from "../../assets/gameImage.png";

export function CardApp() {
  return (
    <div className="cardApp">
      <img className="cardApp-bgimg" src={gameImage} alt="gameImage" />
      <img
        src={launchImage}
        alt="launch"
        className="launch_game"
        onClick={() => {
          alert("Game is launched");
        }}
      />
      <div className="activeEl">
        <h2>Game1</h2>
      </div>
    </div>
  );
}
