import React from 'react';
import './TodoItem.css';
import { ImCheckboxUnchecked } from 'react-icons/im'
import { ImCheckboxChecked } from 'react-icons/im'
import { FcCancel } from 'react-icons/fc'

function TodoItem(props) {
  return (
    <li className="TodoItem">
      {!!props.completed ? <ImCheckboxChecked/> : <ImCheckboxUnchecked onClick={props.onComplete}/>}
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <FcCancel style={{fontSize: '2.6rem'}} type='button' onClick={props.onDelete}/>
      {/* <span 
        // className="Icon Icon-delete"
          onClick={props.onDelete}
        >
        X
      </span> */}
    </li>
  );
}

export { TodoItem };