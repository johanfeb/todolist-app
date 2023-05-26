import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import {
  addTodos,
  completeTodos,
  editTodos,
  removeTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    editTodo: (obj) => dispatch(editTodos(obj)),
    completeTodo: (obj) => dispatch(completeTodos(obj)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");

  const getButtonVariant = (buttonType) => {
    return sort === buttonType ? "primary" : "secondary";
  };

  return (
    <div className="displaytodos">
      <div className="buttons">
        <Button
          variant={getButtonVariant("active")}
          onClick={() => setSort("active")}
        >
          Active
        </Button>
        <Button
          variant={getButtonVariant("completed")}
          onClick={() => setSort("completed")}
        >
          Completed
        </Button>
        <Button
          variant={getButtonVariant("all")}
          onClick={() => setSort("all")}
        >
          All
        </Button>
      </div>

      <ul>
        {/* Active */}
        {props.todos.length > 0 && sort === "active"
          ? props.todos.map((item) => {
              return (
                item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}

        {/* Completed */}
        {props.todos.length > 0 && sort === "completed"
          ? props.todos.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}

        {/* All Items */}
        {props.todos.length > 0 && sort === "all"
          ? props.todos.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
