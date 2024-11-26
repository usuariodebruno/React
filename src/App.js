import React, { useEffect, useState } from 'react';
import './App.css';
import Counter from './Counter2';


function App() {

  const [show, setShow] = useState(false);

  let time = 0;

  useEffect(() => {
    
    let timer = setInterval(() => {
      time++;
      console.log(time);
      if (time > 10) {
        clearInterval(timer);
      }
    }, 1000);

  }, []);


  if (show) {
    return (
      <Counter count={5}></Counter>
    );
  } else {
    return (
      <div>
        <h1>Contador desmontado</h1>
        <button onClick={() => setShow(true)}>Mostrar contador</button>
      </div>
    );
  }

}

export default App;
