import React from "react";
import ToDo from "./ToDo"

function ToDoList({toDos,setToDos}){
    return(
        <div className="container mx-auto">
            <ul className="todo-list bg-gr p-4">              
                 {toDos.map( task =>{
                     return <ToDo setToDos={setToDos} key={task.id} todo={task} toDos = {toDos} text={task.text}/>
                 })
                  }
            </ul>
        </div>
    )
}

export default ToDoList; 