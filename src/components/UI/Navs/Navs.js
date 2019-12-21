import React from 'react';
import { NavLink } from 'react-router-dom';
import { CATEGORIES } from '../../../constants';

const Navs = props => (
  <div className="nav flex-column nav-pills">
    {CATEGORIES.map(cat => (
      <NavLink className="nav-link" to={`/quotes/${cat}`} key = {cat}>{cat}</NavLink>
    ))}
</div>
);

export default Navs;