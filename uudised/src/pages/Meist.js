import { useState } from "react";

function Meist() {
  const [kontakt, n2itaKontakt] = useState("");

  const tootajad = [
    {nimi:"Mati",ala:"Direktor",telefon:"+31312312"},
    {nimi:"Riina",ala:"Personalijuht",telefon:"+31412414"},
    {nimi:"Maarja",ala:"Kvaliteedijuht",telefon:"+31512515"},
    {nimi:"Maiki",ala:"Arendusosakonna juht",telefon:"+31612616"},
    {nimi:"Anet",ala:"Kliendihalduse juht",telefon:"+31712717"},
    {nimi: "Arvo Pärt", ala: "Uudisklippide taustamuusika", telefon: "+313912919"},
    {nimi: "Kelly Sildaru", ala: "Püstolreporter", telefon: "+31824818"},
    {nimi: "Edward von Longus", ala: "Uudiste kujundamine", telefon: "+69853121"},
    {nimi: "Kerli Kõiv", ala: "Välisturgude spetsialist", telefon: "+6987452"}
  ]

  const [valitud, uuendaValitud] = useState("");

  const v6taYhendust = (tootaja) => {
    n2itaKontakt(tootaja.telefon);
    uuendaValitud(tootaja.nimi);
  }

  return (
    <div><div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
    <div>Meie töötajad:</div>
    { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    {/* VALITUD INIMENE: {valitud} */}
    <br />

    <div>{tootajad.map(tootaja =>
      <div className={tootaja.nimi === valitud ? "valitud" : undefined}> 
        <div>{tootaja.nimi}</div>
        <div>{tootaja.ala}</div>
        <button onClick={() => v6taYhendust(tootaja)}>Võta ühendust</button>
        <br /><br />
      </div> )}
    </div>
    {/* <br />
    <div>Arvo Pärt</div>
    <div>Uudisklippide taustamuusika</div>
    <button onClick={() => n2itaKontakt('+31312312')}>Võta ühendust</button>
    <br /><br />
    <div> Kelly Sildaru</div>
    <div>Püstolreporter</div>
    <button onClick={() => n2itaKontakt('+313124123')}>Võta ühendust</button>
    <br /><br />
    <div>Edward von Lõngus</div>
    <div>Uudiste kujundamine</div>
    <button onClick={() => n2itaKontakt('+3131231231')}>Võta ühendust</button>
    <br /><br />
    <div>Kerli Kõiv</div>
    <div>Välisturgude spetsialist</div>
    <button onClick={() => n2itaKontakt('+312312312')}>Võta ühendust</button>
    <br /><br /> */}
    
    </div> );
}

export default Meist;