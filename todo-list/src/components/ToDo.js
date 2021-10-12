import React from "react";

function ToDo({text, id}){
    return(
        <div class="container mx-auto">
            <div className="flex justify-center items-center ">
            <li key={ Math.random().toString(36).substr(2, 9) }className="mx-2 text-xl ">{text}</li>
            <div className="text-white text-xl px-4 py-6">
            <button className="bg-blue-400 px-6 mx-4">+</button>
            <button className="bg-red-400 px-6">x</button>
            </div>
            </div>
        </div>
    )
}

export default ToDo;