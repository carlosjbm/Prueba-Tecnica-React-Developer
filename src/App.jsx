// import { useEffect, useState } from "react";

import "./App.css";
import useFetch from "./helpers/useFetch";

function App() {
  const { fact, image } = useFetch("http://hola", "http://otra");

  // const trunkFact = (fact) => {
  //   let spaces = 3;
  //   let countSpaces = 0;

  //   for (let index = 0; index < fact.length; index++) {
  //     if (fact[index] === " " && countSpaces === spaces) {
  //       return fact.slice(0, index);
  //     } else countSpaces + 1;
  //   }
  // };

  return (
    <>
      <div className="mycard">
        {image ? <img src={image.mimetype} alt="Image" /> : <p>Loading...</p>}
        {fact ? <p>{fact.fact}</p> : <p>Loading...</p>}
        <br />
        {/* {dataFact ? <p>{trunkFact(dataFact.fact)}</p> : <span>Trunked...</span>} */}
      </div>
    </>
  );
}

export default App;
