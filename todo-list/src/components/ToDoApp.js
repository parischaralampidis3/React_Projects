import React,{useState} from "react"
import data from "../data.json";

function ToDoApp (){
    const [task, setTask] = useState(data);

    const handleInput = (e) =>{
        setTask(e.target.value);
        console.log(task)
        e.preventDefault();
    }
    return(
        <div>
            
            <input type="text" value={task} placeholder="Enter a message" onChange = {handleInput}/>
            <div>
                <p>Remember to, {task}</p>
            </div>
            
            
        </div>
        );
    };

export default ToDoApp;