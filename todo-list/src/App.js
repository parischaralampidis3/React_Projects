import React,{useState, useEffect} from 'react';
import NavigationBar from './components/NavigationBar';
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";

 




  
    //use effect
  function App() {
    
    //state 
  const [inputText, setInputText] =  useState(''); 
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filterToDos, setFilterToDos] = useState([]);
  //run once when the application starts
  useEffect(() =>{
    getLocalToDos();
  },[])
  useEffect (() =>{
    handleFilterToDos();
    saveLocalTodos();
  },[toDos,status]);
  

  //functions

  const handleFilterToDos=()=>{
    switch(status){
      case "completed":
        setFilterToDos(toDos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilterToDos(toDos.filter(todo => todo.completed === false));   
        break;
        default:
          setFilterToDos(toDos);
          break;

    } 
  };

  //save to local 

  const saveLocalTodos = () =>{
      localStorage.setItem('toDos', JSON.stringify(toDos));
  };

  const getLocalToDos = () =>{
      if(localStorage.getItem('toDos') === null){
         localStorage.setItem('toDos',JSON.stringify([]));
      }else{
        let toDoLocal = JSON.parse(localStorage.getItem('toDos'))
        setToDos(toDoLocal);
      }
  }

   return (
    <div className="App">
      <NavigationBar /> 
      <Form  status={status} setStatus={setStatus} toDos = {toDos} setToDos = {setToDos} inputText= {inputText} setInputText={setInputText} />
     <ToDoList filterToDos={filterToDos} toDos ={toDos} setToDos={setToDos}/>

     </div>

  );
}

export default App;
