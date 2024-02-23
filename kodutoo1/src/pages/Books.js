import { useState } from 'react';

function Books() {
  const [books, uuendaBooks] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Deep Work", "Lean Thinking" ])
  
  const originaal = () => {
    uuendaBooks(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Deep Work", "Lean Thinking" ])
  }
  const sorteeriAZ = () => {
    books.sort((a,b) => a.toString().localeCompare(b.toString()));
    uuendaBooks(books.slice()); 
  }
  const sorteeriZA = () => {
    books.sort((a,b) => b.toString().localeCompare(a.toString()));
    uuendaBooks(books.slice()); 
  }
  
  const sorteeriSonaPikkus = () => {
    books.sort((a, b) => a.length - b.length);
    uuendaBooks(books.slice()); 
    }
  
  const sorteeriTeineTahtAZ = () => {
      books.sort((a,b) => a[1].localeCompare(b[1]));
      uuendaBooks(books.slice()); 
      }
  
      const sorteeriSonadeArvuJargi = () =>{
        books.sort((a, b) => a.split(' ').length - (b.split(' ').length));
        uuendaBooks(books.slice());
      }

      // const sorteeriWordsByLength = () => {
      //   const sortedWords = [...books].sort((a, b) => a.length - b.length);
      //   uuendaBooks(sortedWords);
      // }
  
      const sorteeriEelviimaseTaheJargi= () => {
        books.sort((a, b) => a.charCodeAt(a.length - 2) - b.charCodeAt(b.length - 2));
        uuendaBooks(books.slice()); 
      }
  
      const filtreeriTheAlgus =() => {
        const vastus = books.filter(t => t.startsWith("The") === true);
        uuendaBooks(vastus);
      }
  
      const filtreeriKeskelAnd=() => {
        const vastus = books.filter(lyhend => lyhend.includes("and") === true); 
        uuendaBooks(vastus);
      }
  
      const filtreeriRohkemKui10Tahte =() => {
        const vastus = books.filter(rohkem => rohkem.length > 10);
        uuendaBooks(vastus);
      }
  
      const filtreeriVahemKui7Tahte =() => {
        const vastus = books.filter(vahem=> vahem.length < 7);
        uuendaBooks(vastus);
      }
      
      // const filtreeriRohkemKui3Sona = () => {
        //ei saanud toimima
      // }
  
      const filtreeriEelviimaneTahtC = () => {
        const vastus = books.filter(book => {
          if (book.length >= 2) {
            const eelviimaneTaht = book.charAt(book.length - 2);
            return eelviimaneTaht.toLowerCase() === "c";
          }
          return false; 
        });
        uuendaBooks(vastus);
      }
  
  return (
    <div>
      <br /><br />
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriSonaPikkus}>Sorteeri sõna pikkuse järgi</button>
        <button onClick={sorteeriTeineTahtAZ}>Sorteeri teise tähe järgi A-Z</button>
        <button onClick={sorteeriSonadeArvuJargi}>Sorteeri sõnade arvu järgi</button>
        {/* <button onClick={sorteeriWordsByLength}>Sorteeri sõnade arvu järgi</button> */}
        <button onClick={sorteeriEelviimaseTaheJargi}>Sorteeri eelviimase tähe järgi</button>
      <br /><br />

      <button onClick={originaal}>Tagasi originaali</button>
      <br />

      <button onClick={filtreeriTheAlgus}>Filtreeri 'the'ga algavad</button>
      <button onClick={filtreeriKeskelAnd}>Filtreeri kellel on sees lühend 'and'</button>
      <button onClick={filtreeriRohkemKui10Tahte}>Filtreeri rohkem kui 10 tähelised</button>
      <button onClick={filtreeriVahemKui7Tahte}>Filtreeri vähem kui 7 tähelised</button>
      {/* <button onClick={filtreeriRohkemKui3Sona}>Filtreeri kolme või rohkema sõnalised</button> */}
      <button onClick={filtreeriEelviimaneTahtC }>Filtreeri kellel eelviimane täht on “C”</button>
   
        {books.map(x => <div>{x}</div>)}
    </div>
  )
}

export default Books;