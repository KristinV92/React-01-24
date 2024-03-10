import { useRef } from 'react';
import esindusedFailist from "../data/esindused.json";
import { useParams } from 'react-router-dom';

function MuudaEsindus() {
  const {index} = useParams();
  const esindus = esindusedFailist[index];
  const nimiRef = useRef();

  if( esindus === undefined) {
    return <div>Esindust ei leitud</div>
  }

  const muuda = () => {
    esindusedFailist[index] = nimiRef.current.value
  }

  return (
    <div>
       <label Esinduse nimi></label> <br />
      <input ref={nimiRef} defaultValue={esindus} type="text" /> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaEsindus