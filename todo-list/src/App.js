import React,{useState} from 'react';
import NavigationBar from './components/NavigationBar';
import ToDoList from "./components/ToDoList";

import Form from "./components/Form";

 

function App() {
  const [inputText, setInputText] =  useState(''); 
  const [toDos, setToDos] = useState([]);
  
   return (
    <div className="App">
      <NavigationBar /> 
      <Form toDos = {toDos} setToDos = {setToDos} inputText= {inputText} setInputText={setInputText} />
     <ToDoList toDos ={toDos} setToDos={setToDos}/>

     </div>

  );
}

export default App;
