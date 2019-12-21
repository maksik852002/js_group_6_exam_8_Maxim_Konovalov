import React from 'react';
import {NavLink} from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';

const Quotes = (props) => {
  return (
    <div className="card my-3">
      <div className="card-header">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{props.author}</h5>
          <div>
            {props.children}
            <NavLink className='close mr-2' to = {`/quotes/${props.id}/edit`}><FaEdit/></NavLink>
          </div>
        </div>
        
      </div>
      <div className="card-body">
        <p>{props.text}</p>
      </div>
    </div>
  )
};


export default Quotes;