import redbullPng from "../../assets/drinkImg.png";
import deletePng from "../../assets/cartdeletebtn.png"
import closePng from "../../assets/closePng.png"

export function CartComponent({ activeCart, setterCart }) {
  let goodsArray = [
    { name: "RedBull", price: 5, quantity: 2 },
    { name: "Burger", price: 2, quantity: 1 },
    { name: "Snickers", price: 7, quantity: 3 },
  ];
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
      <div className="cart_block">
        <img src={closePng} alt="" className="closeBtn" onClick={()=>{setterCart(false)}}/>
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
                <img src={deletePng} alt="" className="deletePng"/>
              </li>
            );
          })}
        </ul>
        <h2>Totall: {total} $</h2>
        <button>BUY</button>
      </div>
    </div>
  );
}
