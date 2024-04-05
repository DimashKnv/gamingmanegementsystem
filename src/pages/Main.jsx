import { auth } from "../firebase";
import minDisc from "../assets/minDIsc.png";
import midDisc from "../assets/midDIsc.png";
import maxDisc from "../assets/maxDisc.png";
import { NavComp } from "../components/NavComponent";
import { Tarif } from "../components/Tarif";
import { LoginAcc } from "./Login";
import { FinalPage } from "../components/FinalPage";
import { useState } from "react";

export function Main() {
  let user = auth.currentUser;
  let discRate = [0, 5, 15];
  let discount = discRate[1];

  let [activeEl, setActiveEl] = useState('tarif');

  return (
    <div className="mainPage">
      <div className="leftside">
        <NavComp activeEl={activeEl} setter={setActiveEl}></NavComp>
        {activeEl == "tarif" ? <Tarif></Tarif> : <FinalPage></FinalPage>}
      </div>
      <div className="rightside">
        <div className="userInfo">
          <h1>{user.displayName}</h1>
          <h3>Newbie</h3>
        </div>
        <div className="timeInfo">
          <div className="timeInfoRow">
            <div className="timeInfoRowPiece">
              <p>Open Time:</p>
              <h2>03:00</h2>
            </div>
            <div className="timeInfoRowPiece">
              <p>Tariff:</p>
              <h2>2+1</h2>
            </div>
          </div>
          <div className="timeInfoRow">
            <div className="timeInfoRowPiece">
              <p>All Time:</p>
              <h2>10:00</h2>
            </div>
            <div className="timeInfoRowPiece">
              <p>Price p/h:</p>
              <h2>500 tg/h</h2>
            </div>
          </div>
        </div>
        <div className="discountInfo">
          <p>Discount:</p>
          <div className="discountRange">
            {discRate.map((e) => {
              return <h3>{e}%</h3>;
            })}
          </div>

          <img
            src={discount == 0 ? minDisc : discount == 5 ? midDisc : maxDisc}
            alt=""
          />
        </div>
        <div className="balanceInfo">
          <p>Balance:</p>
          <h2>10000tg</h2>
        </div>
        <div className="btnInfo">
          <button>REFILL</button>
          <button>LOGOUT</button>
        </div>
      </div>
    </div>
  );
}
