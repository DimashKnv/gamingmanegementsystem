import { TarifPiece } from "./TarifPiece";

export function Tarif() {
  let arr = [
    { name: "1h", price: 500 },
    { name: "2+1h", price: 1000 },
    { name: "5h", price: 2000 },
    { name: "Night", price: 5000 },
  ];
  return (
    <div>
      <div className="tarif">
        <h1>Tarif</h1>
        {arr.map((e) => {
          return <TarifPiece title={e.name} subtitle={e.price}></TarifPiece>;
        })}
      </div>
      <div className="ads">
        <h1>Ad place</h1>
      </div>
    </div>
  );
}
