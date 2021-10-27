import React,{useState,useEffect} from  'react';
import './App.css';

function App() {
  const [state, setState] = useState(" ");

  useEffect(() =>{
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => setState({apiResponse: res} ))
    .catch(error => console.log('error'))
 
  },[])



  return (
    <div className="App">
      <h1>Hello client</h1>
      <p>{state.apiResponse}</p>
    </div>
  );
}

export default App;
