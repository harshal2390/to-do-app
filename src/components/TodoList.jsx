import { useState } from "react";
import "../styles.css"; // Import CSS file

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <h2>To-Do List</h2>

      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task ${task.completed ? "completed" : ""}`}
          >
            <span>{task.text}</span>
            <div>
              <button
                className="complete-btn"
                onClick={() => toggleComplete(task.id)}
              >
                ✔️
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
