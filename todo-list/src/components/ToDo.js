import React from "react";

function ToDo({ text, setToDos, toDos, todo }) {
    const deleteTask = (e) => {
        e.preventDefault();
        console.log("delete button hit");
        setToDos(toDos.filter((el) => el.id !== todo.id));
    };

    const completeTask = () =>{
        setToDos(toDos.map(item =>{
            if(item.id === todo.id){
                return{
                    ...item, 
                    completed : !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div class="container mx-auto">
            <div className="flex justify-center items-center ">
                <li className= {`mx-2 text-xl ${todo.completed ? "line-through":""}`}>{text}</li>
                <div className="text-white text-xl px-4 py-6">
                    <button onClick={completeTask} className="bg-blue-400 px-6 mx-4">+</button>
                    <button onClick={deleteTask} className="bg-red-400 px-6">x</button>
                </div>
            </div>
        </div>
    )
}

export default ToDo;