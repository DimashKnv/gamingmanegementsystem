import redbullPng from "../../assets/drinkImg.png";
import deletePng from "../../assets/cartdeletebtn.png";
import closePng from "../../assets/closePng.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../store/reducers";

export function CartComponent({ activeCart, setterCart }) {
  let dispatch=useDispatch();
  const cartState = useSelector((state) => {
    return state.cartReducer;
  });
  let total = 0;
  cartState.cart.map((e) => {
    let mult = e.price * e.count;
    total += mult;
  });
  return (
    <div
      className={
        activeCart == false ? "cart_comp-nonActive" : "cart_comp-active"
      }
    >
      <div className="cart_block">
        <img
          src={closePng}
          alt=""
          className="closeBtn"
          onClick={() => {
            setterCart(false);
          }}
        />
        <ul>
          {cartState.cart.map((e) => {
            return (
              <li className="cartgoodspart">
                <div>
                  <img src={redbullPng}></img>
                  <p>{e.name}</p>
                </div>
                <p>{e.count} pcs</p>
                <p>{e.price} $</p>
                <img src={deletePng} alt="" className="deletePng" onClick={()=>{
                  dispatch(deleteCart(e))
                }}/>
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
