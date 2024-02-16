import { useRef, useState } from 'react';

function Logimine() {

    const kasutajaNimiRef = useRef();
    const paroolRef = useRef();
    const [paroolKorrektne, setParoolKorrektne] = useState(true);

    const kontrolliParool = () => {
        if (paroolRef.current.value.length < 8 ||
            paroolRef.current.value.toLowerCase() === paroolRef.current.value ||
            paroolRef.current.value.toUpperCase() === paroolRef.current.value ||
            paroolRef.current.value.includes("%") === false) {
                setParoolKorrektne(false);
            }else{
                setParoolKorrektne(true);
            }

    }
  return (
    <div>

        <label>Kasutajanimi</label> <br />
        <input type="text" ref={kasutajaNimiRef} /> <br />
        <label>Parool</label> <br />
        <input onChange={kontrolliParool} type="password" ref={paroolRef} /> <br />
        <button>Logi sisse</button>
       {paroolKorrektne === true && <div>Parool pole korrektne</div>}

    </div>
  )
}

export default Logimine;