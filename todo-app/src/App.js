import React, { useState, useEffect } from "react";

function TaskList() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add or Update Task
  const handleAdd = () => {
    if (input.trim() === "") return;

    if (editIndex !== null) {
      const updated = [...tasks];
      updated[editIndex].text = input;
      setTasks(updated);
      setEditIndex(null);
    } else {
      setTasks([...tasks, { text: input, completed: false }]);
    }

    setInput("");
  };

  // Delete Task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Edit Task
  const editTask = (index) => {
    setInput(tasks[index].text);
    setEditIndex(index);
  };

  // Toggle Complete
  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div style={styles.container}>
      <h2>🚀 Task Manager</h2>

      <div>
        <input
          type="text"
          placeholder="Enter task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.addBtn}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.listItem}>
            <span
              onClick={() => toggleComplete(index)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {task.text}
            </span>

            <div>
              <button onClick={() => editTask(index)} style={styles.editBtn}>
                Edit
              </button>
              <button onClick={() => deleteTask(index)} style={styles.deleteBtn}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  input: {
    padding: "10px",
    width: "250px",
    marginRight: "10px",
  },
  addBtn: {
    padding: "10px 15px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px auto",
    width: "300px",
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
  },
  editBtn: {
    marginRight: "5px",
    padding: "5px 10px",
  },
  deleteBtn: {
    padding: "5px 10px",
  },
};

export default TaskList;