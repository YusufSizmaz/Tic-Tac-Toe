import { useState } from "react";

function Square() {
  const [deger, setDeger] = useState(0);

  const azalt = () => {
    if (deger > 0) {
      setDeger(deger - 1);
    }
  };
  const arttir = () => {
    setDeger(deger + 1);
  };

  const resetle = () => {
    setDeger(0);
  };
  return (
    <>
      <div>
        <h1>Sayac Uygulamasi</h1>
        <h2>{deger}</h2>
        <button onClick={azalt}>-</button>
        <button onClick={arttir}>+</button>
        <button onClick={resetle}>Resetle</button>
      </div>
    </>
  );
}
export default Square;
