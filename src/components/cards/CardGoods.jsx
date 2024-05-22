import redbullPng from "../../assets/drinkImg.png";
import plusBtn from "../../assets/plusBtn.png";
import minusBtn from "../../assets/minusBtn.png";
import { useState } from "react";
export function CardGoods() {
  let [count, setCount] = useState(0);

  return (
    <div className="cardApp">
      <img src={redbullPng} alt="redbullpng" />
      <div className={count > 0 ? "counterBox active" : "counterBox nonactive"}>
        <img
          className="counter_image"
          src={minusBtn}
          alt="minus"
          onClick={() => {
            count > 0 ? setCount((count -= 1)) : setCount(0);
          }}
        />
        <h2>{count}</h2>
        <img
          className="counter_image"
          src={plusBtn}
          alt="plus"
          onClick={() => {
            setCount((count += 1));
          }}
        />
      </div>
      <div className="activeEl">
        <h2>RedBull</h2>
      </div>
    </div>
  );
}
