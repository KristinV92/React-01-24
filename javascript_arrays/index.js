// Tavaline JavaScript - ilma Reactita
// TAvalisele JavaScriptile on VÄGA PALJU videosid/õppematerjali nullist
// Reactile väga vähe õppematerjali nullist. Reacti õppematerjalid
//        eeldavad, et oskad juba JavaScripti

// Enne JavaScripti ja siis React
// Miinus -> React kustutab/kaotab ära osad loogikad mida teeb tavaline JS

// Kohe React
// Miinus -> õppematerjale pole piisavalt ja eeldatakse, et oskad JS

// 1. HTML template tekitada -> tühja HTML faili ja kirjutame "!"
// 2. Mingid tagid panna lehele
// 3. Siduda <script> kaudu index.js fail ja panna "defer"

              // 0      1       2       3        4
const autod= ["Nobe", "BMW", "Tesla", "Saab", "Volvo"];

//autod.splice(0); // imiteerib nupuvajutust -> tühjendab
//autod.splice(3,1); // imiteerib nupuvajutust -> kustutab järjekorranumbriga 3
//autod.splice(2, 0, "Opel"); // imiteerib nupuvajutust -> lisab Opeli järjekorranumbrile 2

document.getElementById("tekst").innerHTML = autod;

console.log(autod);

const bmw = autod[1]; // tootaja[2].localeCompare()     tootaja[2] === "1"  //võtmiseks

console.log(bmw);

autod[3] = "Ford";   //muutmiseks

console.log(autod);