import { useSelector } from "react-redux";
import TodoCard from "../components/Todocard";

const ActivePage = () => {
    const todos = useSelector(state => state.todos.todos);

    const activeTodos = todos.filter(todo => !todo.completed)

    return (
        <div>
            {
                activeTodos.map((todo, index) => (
                    <TodoCard 
                        key={index}
                        todo={todo}
                    />
                ))
            }
        </div>
    );
}

export default ActivePage