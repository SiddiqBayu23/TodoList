import { Link, Outlet } from "react-router-dom"
import { actions } from '../features/todos/todosSlice';
import { useDispatch, useSelector } from "react-redux";

const Layout = () => {
    const userInput = useSelector(state => state.todos.userInput);
    const dispatch = useDispatch();

    const handleCreateTodo = (e) => {
        e.preventDefault();
        dispatch(actions.createTodo())
    }

    const handleSetUserInput = (userInput) => {
        dispatch(actions.setUserInput({ userInput }))
    }

    return (

        <div>
                <div className="row text-center p-10 text-black ">
                    <div className="col">
                        <h1 className="text-5xl">What's the plan for today?</h1>
                    </div>
                </div>
            
            <form className="flex gap-2 p-2" onSubmit={handleCreateTodo}>
                <input 
                    type="text"
                    value={userInput}
                    onChange={(e) => handleSetUserInput(e.target.value)}
                    placeholder="Enter your todo message"
                    className="p-2 w-full border-cyan-400 border-solid border-2 rounded"
                />
                <input type="submit" className="btn" value="Add" />
            </form>
            <nav >
                <ul className="flex gap-2 p-2">
                    <li className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md">
                        <Link to={"/"}>All</Link>
                    </li>
                    <li className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md">
                        <Link to={"/active"}>Active</Link>
                    </li>
                    <li className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md">
                        <Link to={"/completed"}>Completed</Link>
                    </li>
                </ul>
            </nav>
            <section className="p-2">
                <Outlet />
            </section>
        </div>
    )
}

export default Layout