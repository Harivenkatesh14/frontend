import React from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const HomePage = () => {
  return (
    <div className="container mx-auto p-5">
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default HomePage;
