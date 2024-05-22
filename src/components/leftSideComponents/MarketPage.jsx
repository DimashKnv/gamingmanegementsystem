import { CardGoods } from "../cards/CardGoods";

export function MarketPage() {
  let arr = [];
  let i = 0;
  while (i < 30) {
    arr.push({});
    i++;
  }
  return (
    <div className="main_cont">
      <ul className="categories">
        <li>ALL</li>
        <li>FOOD</li>
        <li>DRINKS</li>
      </ul>

      <div className="cardRow">
        {arr.map(() => {
          return <CardGoods></CardGoods>;
        })}
      </div>
    </div>
  );
}
