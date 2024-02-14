import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function LisaArvuti() {
  const [message, setMessage] = useState("Lisa arvuti!");
  const [n2itaNuppu, uuendaN2itaNuppu] = useState(true);

function addProduct (){
  setMessage("Arvuti lisatud");
  uuendaN2itaNuppu(false);
  toast.success("Arvuti lisatud!")
}
  return (
    <div>
     <div>Sõnum: {message}</div>
     <label>Mark</label> <br />
     <input type="text" /> <br />
     <label>Mudel</label> <br />
     <input type="text" /> <br />
     <label>Maksumus</label> <br />
     <input type="number" /> <br />
    { n2itaNuppu === true && <button onClick={() => addProduct ()}>Sisesta</button>}

    <Toaster 
    position="top-right"
    reverseOrder={false}
    />
    </div> )
}

export default LisaArvuti;