import React,{useEffect,useState} from 'react';

import './App.css';

function App() {
  const [result,setResult] = useState()
  
  useEffect(() => {fetchData();}, []);

  const fetchData = async () => {
  
  fetch("https://mursel-quote-server.glitch.me/quotes/random")
  .then(res =>res.json())
  .then((result) => {setResult(result)})}

  return (
    <div className="App">
     <p>{result && result.quote}</p>
     <p> {result  && result.author}</p>
    
     <button onClick = {fetchData} >Get Quote</button>
    </div>
  );
}

export default App;
