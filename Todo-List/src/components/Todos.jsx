import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  editTodos,
  removeTodos,
} from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = {
  addTodo: addTodos,
  removeTodo: removeTodos,
  editTodo: editTodos,
  completeTodo: completeTodos,
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    props.addTodo({
      id: Math.floor(Math.random() * 1000),
      item: todo,
      completed: false,
    });
    setTodo("")
  };

  return (
    <div className="addTodo">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleAddTodo();
          }
        }}
        className="input-todo"
        placeholder="What to do"
        value={todo}
      />

      <button className="btn-add" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
