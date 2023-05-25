import { useState, useRef, useEffect } from "react";
import { GiCheckMark } from "react-icons/gi";
import { RiEdit2Fill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { actions } from "../features/todos/todosSlice";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [updatedContent, setUpdatedContent] = useState(todo.content);
  const inputRef = useRef(null);

  const handleToggle = (id) => {
    if (!editing) {
      dispatch(actions.toggleTodo({ id }));
    }
  };

  const handleRemove = (id) => {
    dispatch(actions.deleteTodo({ id }));
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = (id) => {
    dispatch(actions.editTodo({ id, content: updatedContent }));
    setEditing(false);
  };

  const handleKeyDown = (e, id) => {
    if (e.key === "Enter") {
      handleSave(id);
    }
  };

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  return (
    <div className="flex justify-between p-2 bg-blue-500/50 rounded mb-4 items-center">
      {editing ? (
        <input type="text" value={updatedContent} onChange={(e) => setUpdatedContent(e.target.value)} className="border border-gray-300 rounded p-1" ref={inputRef} onKeyDown={(e) => handleKeyDown(e, todo.id)} />
      ) : (
        <p className="font-semibold" style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.content}
        </p>
      )}
      
        <div className="flex gap-3 items-center">
          <div className="flex gap-3 items-center">
          <input type="checkbox" name="completed" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
          <label className="font-semibold" htmlFor="completed">
            Completed
          </label>
          </div>
          <div></div>
          {!todo.completed && (
          <div className="flex gap-3 items-center">
          {editing ? (
            <button className="btn" onClick={() => handleSave(todo.id)}>
              <GiCheckMark />
            </button>
          ) : (
            <button className="btn" onClick={handleEdit}>
              <RiEdit2Fill />
            </button>
          )}
          <button className="btn" onClick={() => handleRemove(todo.id)}>
            <FaTrash />
          </button>
          </div>
          )}
        </div>
    </div>
  );
};

export default TodoCard;