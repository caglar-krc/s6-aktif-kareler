import React, { useState } from "react";

// Bu değişkeni YALNIZCA bir state'in ilk değeri olarak kullan.
const kareIdListesi = ["sqA", "sqB", "sqC", "sqD"];

export default function Kareler() {
  const [kareler] = useState(kareIdListesi);
  const [aktifKare, setAktifKare] = useState(null);

  const classAdiAl = (id) => {
    return aktifKare === id ? 'active' : ""
  };

  const aktifEt = (id) => {
    setAktifKare(id === aktifKare ? null : id)
  };


  return (
    <div className="container">
      <h1>Aktif Kare</h1>
      <div className="squares">
        {kareler.map((id) => (
          <div
            key={id}
            data-testid={id}
            className={`square ${classAdiAl(id)}`}
            onClick={() => aktifEt(id)}
          />
        ))}
      </div>
    </div>
  );
}
