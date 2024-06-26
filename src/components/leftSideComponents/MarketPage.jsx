import { CardGoods } from "../cards/CardGoods";

export function MarketPage() {
  let productsArray = [
    { name: "Red Bull", price: 2, id: 0, count: 1 },
    { name: "Burger", price: 4, id: 1, count: 1 },
    { name: "Snickers", price: 5, id: 2, count: 1 },
    { name: "Sandwich", price: 6, id: 3, count: 1}
  ];
  return (
    <div className="main_cont">
      <ul className="categories">
        <li>ALL</li>
        <li>FOOD</li>
        <li>DRINKS</li>
      </ul>

      <div className="cardRow">
        {productsArray.map((e) => {
          return <CardGoods object={e}></CardGoods>;
        })}
      </div>
    </div>
  );
}
