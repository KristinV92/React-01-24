import { useParams } from "react-router-dom";

function YksUudis() {
    const { index } = useParams();
    const uudisedLS = JSON.parse(localStorage.getItem("uudised")) || [];
    const leitudUudis = uudisedLS[index];

    if (leitudUudis === undefined) {
      return <div>Uudist ei leitud</div>
    }

  return (
    <div>
        {leitudUudis}
    </div>
  )
}

export default YksUudis