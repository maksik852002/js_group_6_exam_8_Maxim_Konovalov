import React from 'react';
import { NavLink } from 'react-router-dom';
import { CATEGORIES } from '../../../constants';
import './Navs.css'

const Navs = props => (
  <div className="nav flex-column nav-pills my-3">
    {CATEGORIES.map(cat => (
      <NavLink className="nav-link" to={`/quotes/${cat}`} key = {cat}>{cat}</NavLink>
    ))}
</div>
);

export default Navs;