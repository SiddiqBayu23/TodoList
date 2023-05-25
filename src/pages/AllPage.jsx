import { useSelector } from "react-redux";

import TodoCard from "../components/Todocard";

const AllPage = () => {
    const todos = useSelector(state => state.todos.todos);

    return (
        <div>
            {
                todos.map((todo, index) => (
                    <TodoCard 
                        key={index}
                        todo={todo}
                    />
                ))
            }
        </div>
    );
}

export default AllPage