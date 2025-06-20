//Write a functional component TodoList that accepts an array of todos (id, task, completed). Use .map() to render each todo as a list item with a checkbox indicating completion status. Ensure each item has a unique key.
import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: '8px' }}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              readOnly
              style={{ marginRight: '8px' }}
            />
            {todo.task}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
