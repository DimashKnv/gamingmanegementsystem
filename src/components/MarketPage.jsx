import { CardGoods } from "./CardGoods";

export function MarketPage() {
  return (
    <div className="main_cont">
      <ul className="categories">
        <li>ALL</li>
        <li>FOOD</li>
        <li>DRINKS</li>
      </ul>

      <div className="cardRow">
        <CardGoods></CardGoods>
        <CardGoods></CardGoods>
        <CardGoods></CardGoods>
        <CardGoods></CardGoods>
        <CardGoods></CardGoods>
        <CardGoods></CardGoods>
        <CardGoods></CardGoods>
        <CardGoods></CardGoods>
        <CardGoods></CardGoods>
        <CardGoods></CardGoods>
        <CardGoods></CardGoods>
        <CardGoods></CardGoods>
        <CardGoods></CardGoods>
        <CardGoods></CardGoods>
        <CardGoods></CardGoods>
        <CardGoods></CardGoods>
      </div>
    </div>
  );
}
