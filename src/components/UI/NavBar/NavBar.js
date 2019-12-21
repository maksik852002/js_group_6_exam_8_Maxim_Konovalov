import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';

class NavBar extends Component  {

  state = {
    isClicked:false,
  };

  handleClick = () => {
    this.setState({clicked:!this.state.clicked})
  }
 
  render = () => {
    let show = 'collapse navbar-collapse justify-content-end';
    this.state.clicked&&(show+=' d-block');
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container'>
          <NavLink className="navbar-brand" to="/">Quotes Central</NavLink>
          <Button
            label={<span className="navbar-toggler-icon"></span>}
            type='button'
            addClass='navbar-toggler'
            click = {this.handleClick}
          />
          <div className={show}>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/quotes/">Quotes<span className="sr-only">(current)</span></NavLink>
              </li>
              <span className='border border-light align-self-center' style={{width:'2px', height:'25px'}}/>
              <li className="nav-item">
                <NavLink className='nav-link' to="/add-quotes">Submit new quote</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
};

export default NavBar;