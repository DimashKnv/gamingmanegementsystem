import redbullPng from "../../assets/drinkImg.png";
import plusBtn from "../../assets/plusBtn.png";
import minusBtn from "../../assets/minusBtn.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../store/reducers";
export function CardGoods({ object }) {
  let [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  let countObj = {};
  let count1 = 10;
  function asda() {
    countObj = cartState.cart.find((e) => {
      return e.id == object.id;
    });
    console.log(countObj.count);
    count1 = countObj.count;
  }

  return (
    <div className="cardApp">
      <img src={redbullPng} alt="redbullpng" />
      <div className={count > 0 ? "counterBox active" : "counterBox nonactive"}>
        <img
          className="counter_image"
          src={minusBtn}
          alt="minus"
          onClick={() => {
            // count > 0 ? setCount((count -= 1)) : setCount(0);
            asda();
          }}
        />
        <h2>{count1}</h2>
        {/* <h2>{count}</h2> */}
        <img
          className="counter_image"
          src={plusBtn}
          alt="plus"
          onClick={() => {
            dispatch(addCart(object));
            console.log(cartState);
            // setCount((count += 1));
          }}
        />
      </div>
      <div className="activeEl">
        <h2>{object.name}</h2>
      </div>
    </div>
  );
}
