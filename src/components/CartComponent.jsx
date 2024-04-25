import redbullPng from "../assets/drinkImg.png";

export function CartComponent({ activeCart, setterCart }) {
  let goodsArray = [
    { name: "RedBull", price: 5, quantity: 2 },
    { name: "Burger", price: 2, quantity: 1 },
    { name: "Snickers", price: 7, quantity: 3 },
  ];

  //   let obj = goodsArray[0].price*goodsArray[0].quantity
  //   let ob1 = goodsArray[1].price*goodsArray[1].quantity
  //   let ob2 = goodsArray[2].price*goodsArray[2].quantity

  let total = 0;
  goodsArray.map((e) => {
    total += e.price * e.quantity;
  });

  return (
    <div
      className={
        activeCart == false ? "cart_comp-nonActive" : "cart_comp-active"
      }
    >
      CartComponent
      <div>
        <ul>
          {goodsArray.map((e) => {
            return (
              <li className="cartgoodspart">
                <div>
                  <img src={redbullPng}></img>
                  <p>{e.name}</p>
                </div>

                <p>{e.quantity}pcs</p>

                <p>{e.price}$</p>
              </li>
            );
          })}
        </ul>
        <h2>Totall:{total}</h2>
        <button>BUY</button>
      </div>
    </div>
  );
}
