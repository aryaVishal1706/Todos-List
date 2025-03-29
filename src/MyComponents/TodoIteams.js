import React, { memo } from 'react';

const TodoIteams = memo(({ todo, onDelete }) => {
  return (
    <div className='container'>
      {/* Todos Works! */}
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }} >Delete</button>
    </div>
  )
}); // Added closing parenthesis here


export default TodoIteams
