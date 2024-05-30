import { CardGoods } from "../cards/CardGoods";

export function MarketPage() {
  let productsArray = [
    { name: "Red Bull", price: 2, id: 0, count: 0 },
    { name: "Burger", price: 4, id: 1, count: 0 },
    { name: "Snickers", price: 5, id: 2, count: 0 },
    { name: "Sandwich", price: 6, id: 3, count: 0}
  ];
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
        {productsArray.map((e) => {
          return <CardGoods object={e}></CardGoods>;
        })}
      </div>
    </div>
  );
}
