import { auth } from "../firebase";
import minDisc from "../assets/minDIsc.png";
import midDisc from "../assets/midDIsc.png";
import maxDisc from "../assets/maxDisc.png";
import { NavComp } from "../components/leftSideComponents/NavComponent";
import { Tarif } from "../components/leftSideComponents/Tarif";
import { LoginAcc } from "./Login";
import { FinalPage } from "../components/leftSideComponents/FinalPage";
import { useState } from "react";
import { MarketPage } from "../components/leftSideComponents/MarketPage";
import { SettingsPage } from "../components/leftSideComponents/SettingsPage";
import cartImage from "../assets/cartimage.png";
import { CartComponent } from "../components/leftSideComponents/CartComponent";
import { TimeInfoRowPiece } from "../components/rightSideComponents/TimeInfoRowPiece";

export function Main() {
  let user = auth.currentUser;
  let discRate = [0, 5, 15];
  let discount = discRate[1];

  let [activeEl, setActiveEl] = useState("tarif");
  let [activeCart, setActiveCart] = useState(false);

  return (
    <div className="mainPage">
      <div className="leftside">
        <NavComp activeEl={activeEl} setter={setActiveEl}></NavComp>
        <div className="finalPage">
          <CartComponent
            activeCart={activeCart}
            setterCart={setActiveCart}
          ></CartComponent>
          {activeEl == "tarif" ? (
            <Tarif></Tarif>
          ) : activeEl == "market" ? (
            <MarketPage></MarketPage>
          ) : activeEl == "settings" ? (
            <SettingsPage></SettingsPage>
          ) : (
            <FinalPage></FinalPage>
          )}
        </div>
      </div>
      <div className="rightside">
        <div className="userInfo">
          <h1>{user.displayName}</h1>
          <h3>Newbie</h3>
        </div>
        <div className="timeInfo">
          <div className="timeInfoRow">
            <TimeInfoRowPiece
              title={"Open Time:"}
              subtitle={"03:00"}
            ></TimeInfoRowPiece>
            <TimeInfoRowPiece
              title={"Tariff:"}
              subtitle={"2+1"}
            ></TimeInfoRowPiece>
          </div>
          <div className="timeInfoRow">
            <TimeInfoRowPiece
              title={"All Time:"}
              subtitle={"10:00"}
            ></TimeInfoRowPiece>
            <TimeInfoRowPiece
              title={"Price p/h:"}
              subtitle={"500 tg/h"}
            ></TimeInfoRowPiece>
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
          <button
            onClick={() => {
              setActiveCart(true);
            }}
          >
            CART <img src={cartImage} alt="" />
          </button>
          <button>LOGOUT</button>
        </div>
      </div>
    </div>
  );
}
