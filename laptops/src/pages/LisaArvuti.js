import { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function LisaArvuti() {
  const [message, setMessage] = useState("Lisa arvuti!");
  const [n2itaNuppu, uuendaN2itaNuppu] = useState(true);

  const markRef = useRef();
  const mudelRef = useRef();
  const maksumusRef = useRef();

function addProduct (){
  setMessage("Arvuti lisatud!");
  uuendaN2itaNuppu(false);
  toast.success("Arvuti lisatud!", {
    style: {
      border: '2px solid black',
      padding: '10px',
      color: 'green',
      duration: 4000
    },
    iconTheme: {
      primary: 'green',
      secondary: 'white',
    }
  }
    )

const newComputer = {
    "mark": markRef.current.value,
    "mudel": mudelRef.current.value,
    "maksumus": maksumusRef.current.value,
}

const computers = JSON.parse(localStorage.getItem("laptops")) || [];
computers.push(newComputer);
localStorage.setItem("laptops", JSON.stringify(computers));
  }

  return (
    <div>
     <div>Sõnum: {message}</div>
     {/* <label>Mark</label> <br />
     <input type="text" /> <br /> */}
     <label>Mudel</label> <br />
     <input type="text" /> <br />
     <label>Maksumus</label> <br />
     <input type="number" /> <br />

     <div className="grid gap-6 mb-6 md:grid-cols-2 mx-20">
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mark</label>
            <input ref={markRef} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mark" required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mudel</label>
            <input ref={mudelRef} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mudel" required />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Maksumus</label>
            <input ref={maksumusRef} type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Maksumus" required />
        </div>
      </div>

     {n2itaNuppu === true && <button  onClick={() => addProduct ()} className="mx-20 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sisesta</button>}
    <button ></button>

    <Toaster 
    position="top-right"
    reverseOrder={false}
    />
    </div> )
}

export default LisaArvuti;