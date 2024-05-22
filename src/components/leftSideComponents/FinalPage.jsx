import { CardApp } from "../cards/CardApp";

export function FinalPage() {
  let arr = [];

  for (let i = 0; i < 30; i++) {
    arr.push(0);
  }

  return (
    <div className="main_cont">
      <ul className="categories">
        <li>ALL</li>
        <li>RECENT</li>
        <li>GAMES</li>
        <li>PROGRAMS</li>
        <li>BROWSERS</li>
        <li>UTILITIES</li>
      </ul>
      <div className="cardRow">
        {arr.map(() => {
          return <CardApp></CardApp>;
        })}
      </div>
    </div>
  );
}
