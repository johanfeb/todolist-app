import React, { useRef } from "react";
import { MdEdit } from 'react-icons/md';
import {RiDeleteBin2Fill} from 'react-icons/ri'

const TodoItem = (props) => {
  const { item, editTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const edit = (id, value, e) => {
    if (e.which === 13) {
      editTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
      <li key={item.id} className="card">
        <input
          type="checkbox"
          className="btn-left"
          checked={item.completed} 
          onChange={() => props.completeTodo(item.id)} 
        />
        <input className="text-item"
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyPress={(e) => edit(item.id, inputRef.current.value, e)}
        />
        <div className="btn-right">
          <button onClick={() => changeFocus()}>
            <MdEdit className="icon-edit"/>
          </button>
          <button onClick={() => props.removeTodo(item.id)}><RiDeleteBin2Fill className="icon-delete"/></button>{" "}
        </div>
      </li>
  );
};

export default TodoItem;
