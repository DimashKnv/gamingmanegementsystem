import redbullPng from "../../assets/drinkImg.png";
import plusBtn from "../../assets/plusBtn.png";
import minusBtn from "../../assets/minusBtn.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, deleteCart, minusCart } from "../../store/reducers";
export function CardGoods({ object }) {
  let [count, setCount] = useState(0);
  let [num, setNum] = useState(0);
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  let countObj = {};

  useEffect(() => {
    countObj = cartState.cart.find((e) => {
      return e.id == object.id;
    });
    setCount(countObj == undefined ? 0 : countObj.count);
  }, [num]);

  return (
    <div className="cardApp">
      <img src={redbullPng} alt="redbullpng" />
      <div className={count > 0 ? "counterBox active" : "counterBox nonactive"}>
        <img
          className="counter_image"
          src={minusBtn}
          alt="minus"
          onClick={() => {
            if (count > 0) {
              if (count > 1) {
                dispatch(minusCart(object));
              } else {
                dispatch(deleteCart(object));
              }
              setNum((num -= 1));
            }
          }}
        />
        <h2>{count}</h2>
        <img
          className="counter_image"
          src={plusBtn}
          alt="plus"
          onClick={() => {
            dispatch(addCart(object));
            setNum((num += 1));
          }}
        />
      </div>
      <div className="activeEl">
        <h2>{object.name}</h2>
      </div>
    </div>
  );
}
