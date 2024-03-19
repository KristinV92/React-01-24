import React, { useState } from 'react'
import kasutajadFailist from "../kasutajad.json";

function Kasutajad() {
    const [kasutajad, uuendaKasutajad] = useState(kasutajadFailist);

    const originaal = () => {
        uuendaKasutajad (kasutajadFailist);
    }

    const RohkemKui10Tahte =() => {
        const result = kasutajad.filter(kasutaja => kasutaja.username.length >= 10);
        uuendaKasutajad(result);
    }

    const findIndexAndDelete = (kasutaja) => {
        const index = kasutajad.indexOf(kasutaja);
        kasutajad.splice(index,1);
        uuendaKasutajad(kasutajad.slice());
    }

    const findIndexLucio = () => {
        const index = kasutajad.findIndex(user => user.email === "Lucio_Hettinger@annie.ca");
        console.log(index);
    }

    const findFirstNameC = () => {
        const found = kasutajad.find(user => user.name.substring(0,1) === "C");
        console.log(found);
    }

    const sortByLatitude = () => {
        kasutajad.sort((a,b) => a.address.geo.lat.localeCompare(b.address.geo.lat));
        uuendaKasutajad(kasutajad.slice());
    }

    const filterByLongtitude = () => {
        const result = kasutajad.filter(user => user.address.geo.lng > 0);
        uuendaKasutajad(result);
    }

    const sumIds = () => {
        let sum = 0;
        kasutajad.forEach(user => sum = sum + user.id);
        console.log(sum);
    }

    const addToPhoneNumber = () => {
        const result = kasutajad.map(user => ({...user, phone: "000-"+user.phone}))
        uuendaKasutajad(result);
    }

    const replaceAllWithEmails = () =>{
        const result = kasutajad.map(user => user.email);
        console.log(result);
    }

    const replaceCatchphraseLetter = () => {
        const result = kasutajad.map(user => (
        {...user, company:{...user.company, catchPhrase: user.company.catchPhrase.replaceAll("a", "e")}}
        ));
        uuendaKasutajad(result);
    }

  return (
    <div>
        <h3>Hetkel on {kasutajad.length} kasutajat</h3>
        <button onClick={originaal}>Tagasi originaali</button>
        
        <br />
        <button onClick={RohkemKui10Tahte}>Filtreeri 10 või rohkema tähelised kasutajad</button>
        <button onClick={() => findIndexLucio()}>Võta indeks esimeselt kasutajalt, kelle e-mail on "Lucio_Hettinger@annie.ca"</button>
        <button onClick={() => findFirstNameC()}>Näita esimene kasutaja, kelle nime kõige esimene täht on "C" console.log</button>
        <button onClick={() => sortByLatitude()}>Sorteeri kasutajad "lat" väärtuse järgi</button>
        <button onClick={() => filterByLongtitude()}>Näita ainult kasutajaid, kelle "lng" on positiivne</button>
        <button onClick={() => sumIds()}>Liida kokku kõikide kasutajate ID-d</button>
        <button onClick={() => addToPhoneNumber()}>Lisa kõikidele juurde phone: lahtrisse 000 algus</button>
        <button onClick={() => replaceAllWithEmails()}>Näita ainult e-maile </button>
        <button onClick={() => replaceCatchphraseLetter()}>Asenda catchphrase sees kõik "a" tähed "e" tähega</button>

        {kasutajad.map((kasutaja, index) =>
        <div key={kasutaja.id}>
                <h5>{index + 1}.</h5>
                <div>ID: {kasutaja.id}</div>
                <div>Name: {kasutaja.name}</div>
                <div>Username: {kasutaja.username}</div>
                <div>Email: {kasutaja.email}</div>
                <div>address: </div>
                <div>Street: {kasutaja.address.street}</div>
                <div>Suite: {kasutaja.address.suite}</div>
                <div>City: {kasutaja.address.city}</div>
                <div>Zipcode: {kasutaja.address.zipcode}</div>
                <div>Geo: </div>
                    <div>Lat: {kasutaja.address.geo.lat}</div>
                    <div>Lng: {kasutaja.address.geo.lng}</div>
                <div>Phone: {kasutaja.phone}</div>
                <div>Phone: {kasutaja.website}</div>
                <div>Company:</div>
                    <div>Name: {kasutaja.company.name}</div>
                    <div>Catch phrase: {kasutaja.company.catchPhrase}</div>
                    <div>Bs: {kasutaja.company.bs}</div>
                    
            <button onClick={() => findIndexAndDelete(kasutaja)}>Kustuta index</button>    
            <br /><br />
        </div>
        )}
        {kasutajad.length === 0 &&  <div>Ühtegi kasutajat pole nähtav! Tee refresh, et kautajaid kuvada.</div>}
    </div>
  )
}

export default Kasutajad