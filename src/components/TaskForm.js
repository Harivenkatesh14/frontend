import React, { useState } from 'react';
import { createTask } from '../services/api'; // Corrected import path

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({ title, category });
    onTaskAdded();
    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
