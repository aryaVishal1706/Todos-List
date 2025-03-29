import React, { useCallback, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from './MyComponents/About';
import AddTodo from './MyComponents/AddTodo';
import Footer from './MyComponents/Footer';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // For Searching in Todo
  // const [searchQuery, setSearchQuery] = useState("");
  // const filteredTodos = todos.filter(todo =>
  //   todo.title && todo.title.toLowerCase().includes(searchQuery.toLowerCase()) 
  // );

  // For Deleting Todo
  const onDelete = useCallback((todo) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.sno !== todo.sno));
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [setTodos]);

  // For Adding Todo
  const addTodo = useCallback((title, desc) => {
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, [todos, setTodos]);

  return (
    <Router>
      <Header title="My Todos List"/>
      <Routes>  
        <Route path="/" element={
          <>
            <AddTodo AddTodo={addTodo} />
            <Todos todos={todos} setTodos={setTodos} onDelete={onDelete} />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
