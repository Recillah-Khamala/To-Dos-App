import React from 'react';
import Header from './Header';
import InputToDo from './inputToDo';
import ToDoItems from './TodoItems';

const ToDOContainer = () => (
  <div className="px-64">
    <Header />
    <InputToDo />
    <div>
        <ToDoItems />
    </div>
  </div>
);

export default ToDOContainer;
