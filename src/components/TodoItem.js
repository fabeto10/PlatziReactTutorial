import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      {`${!!props.completed ? 
      <span className='material-symbols-outlined'>check_box</span> : 
        <span class="material-symbols-outlined">
        check_box_outline_blank
      </span>}`}
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
          onClick={props.onDelete}
        >
        X
      </span>
    </li>
  );
}

export { TodoItem };