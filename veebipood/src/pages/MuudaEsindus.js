import { useRef } from 'react';
import esindusedFailist from "../data/esindused.json";
import { useParams } from 'react-router-dom';

function MuudaEsindus() {
  const {index} = useParams();
  const esindus = esindusedFailist[index];
  const nimiRef = useRef();
  const aadressRef = useRef();
  const kontaktRef = useRef();

  if( esindus === undefined) {
    return <div>Esindust ei leitud</div>
  }

  const muuda = () => {
    esindusedFailist[index] = {
      "nimi": nimiRef.current.value,
      "aadress": aadressRef.current.value,
      "tel": Number(kontaktRef.current.value)
    };
  }

  return (
    <div>
      <label Esinduse nimi></label> <br />
      <input ref={nimiRef} defaultValue={esindus.nimi} type="text" /> <br />
      <label Esinduse aadress></label> <br />
      <input ref={aadressRef} defaultValue={esindus.aadress} type="text" /> <br />
      <label Esinduse kontakt></label> <br />
      <input ref={kontaktRef} defaultValue={esindus.tel} type="number" /> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaEsindus