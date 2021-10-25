import React from "react";

function Form({ inputText, setInputText, toDos, setToDos, setStatus }) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const handleSelectedToDos = (e) =>{
        setStatus(e.target.value);
    }

    const submitToDoHandler = (e) => {
        e.preventDefault();
        setToDos(
            [
                ...toDos,
                {
                    text: inputText,
                    completed: false,
                    id: inputText.length + 1
                }

            ]
        );
        setInputText('');
    };
    return (
        <div className="bg-blue-200 h-2/4">
            <div className="container mx-auto">
                <form>
                    <div className="flex justify-between p-8 ">
                        <div>
                            <label id="todo-input" value="todo-input "></label>
                            <input onChange={inputTextHandler} type="text" className="p-2" placeholder="add task here" value={inputText} />
                            <button onClick={submitToDoHandler} className="bg-green-300 mx-4 p-2 text-white font-semibold text-lg" type="submit">
                                Add task
                            </button>
                        </div>
                        <div className="select">
                            <select  onChange={handleSelectedToDos} name="todos" className="filter-todo">
                                <option value="all">All</option>
                                <option value="completed">Completed</option>
                                <option value="uncompleted">Uncomplete</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;