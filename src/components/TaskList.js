import React, { useEffect, useState } from 'react';
import { fetchTasks, deleteTask } from '../services/api'; // Corrected import path

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const { data } = await fetchTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-xl font-bold mb-4">Task List</h2>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task._id} className="p-4 border rounded bg-gray-100 flex justify-between">
            <span>{task.title}</span>
            <button
              onClick={() => handleDelete(task._id)}
              className="text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
