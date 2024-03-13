import { auth } from "../firebase";

export function Main() {
  let user = auth.currentUser;

  return (
    <div className="mainPage">
      <div className="leftside">
        <div className="tarif">
          <h1>Tarif</h1>
          <div className="tarifPiece">
            <h1>1h</h1>
            <button>500tg</button>
          </div>
          <div className="tarifPiece">
            <h1>2+1h</h1>
            <button>1000tg</button>
          </div>
          <div className="tarifPiece">
            <h1>5h</h1>
            <button>2000tg</button>
          </div>
          <div className="tarifPiece">
            <h1>Night</h1>
            <button>5000tg</button>
          </div>
        </div>
        <div className="ads">
          <h1>Ad place</h1>
        </div>
      </div>
      <div className="rightside">
        <div className="userInfo">
          <h1>{user.displayName}</h1>
          <p>Newbie</p>
        </div>
        <div className="timeInfo">
          <div className="timeInfoRow">
            <div className="timeInfoRowPiece">
              <p></p>
              <h2></h2>
            </div>
            <div className="timeInfoRowPiece">
              <p></p>
              <h2></h2>
            </div>
          </div>
          <div className="timeInfoRow">
            <div className="timeInfoRowPiece">
              <p></p>
              <h2></h2>
            </div>
            <div className="timeInfoRowPiece">
              <p></p>
              <h2></h2>
            </div>
          </div>
        </div>
        <div className="discountInfo">
            <input type="range" />
        </div>
        <div className="balanceInfo">
            <p></p>
            <h2></h2>
        </div>
        <div className="btnInfo">
            <button>Refill</button>
            <button>LOGOUT</button>
        </div>
      </div>
    </div>
  );
}
