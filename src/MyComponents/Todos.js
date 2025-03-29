import React from 'react';
import PropTypes from 'prop-types';
import TodoItems from '../MyComponents/TodoIteams';

const Todos = (props) => {

  const mystyle = {
    minHeight: "70vh",
    margin: "40px auto",
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "5px"
  }
  return (
    <div className='container' style={mystyle}>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.length === 0 ? "No Todos Found!" :
        props.todos.map((todo) => {
          return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
        })}
    </div>
  )
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Todos;
