import React from "react";
import ToDo from "./ToDo"

function ToDoList({toDos}){
    return(
        <div className="container mx-auto">
            <ul className="todo-list bg-gr p-4">              
                 {toDos.map( task =>{
                     return <ToDo text={task.text}/>
                 })
                  }
            </ul>
        </div>
    )
}

export default ToDoList; 