import { useState } from "react";
import _ from "lodash";

const HomePage = () => {
    const [userInput, setUserInput] = useState();
    const [todos, setTodos] = useState([]);

    const handleCreateTodo = () => {
        if (userInput) {
            const newTodo = {
                id: _.uniqueId(),
                message: userInput,
                completed: false,
            }
    
            setTodos(currentTodos => [newTodo, ...currentTodos]);
            setUserInput("");
        }
    }

    const handleMarkAsCompleted = (id) => {
        setTodos(currentTodos => currentTodos.map(todo => {
            if (todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo
        }))
    }

    const handleRemoveTodo = (id) => {
        setTodos(currentTodos => currentTodos.filter(todos => todos.id !== id))
    }

    console.log({ todos })

    return (
        
        <div className="max-w-lg">
            <div className="row text-center p-10  text-black">
                    <div className="col">
                        <h1 className="text-4xl">What's the plan for today?</h1>
                    </div>
                </div>
            <div className="flex gap-2 p-2 ">
                <input 
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="What to do"
                    className="p-2 w-full border-cyan-400 border-solid border-2 rounded"
                />
                <button className="btn" onClick={handleCreateTodo}>ADD</button>
            </div>
            <div>
                {
                    todos.map((todo, index) => (
                        <div key={index} className="flex justify-between p-2 bg-slate-300 rounded mb-4 items-center">
                            <p>{todo.message}</p>
                            <div className="flex gap-1 items-center">
                                <input
                                    type="checkbox"
                                    name="completed"
                                    checked={todo.completed}
                                    onChange={() => handleMarkAsCompleted(todo.id)}
                                />
                                <label htmlFor="completed">Completed</label>
                                <div></div>
                                <button className="btn" onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default HomePage