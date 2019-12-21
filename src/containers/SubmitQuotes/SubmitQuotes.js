import React, { Fragment } from 'react';
import NavBar from '../../components/UI/NavBar/NavBar';
import SubmitForm from '../../components/SubmitForm/SubmitForm';

const SubmitQuotes = (props) => {
  return (
    <Fragment>
      <NavBar/>
      <div className="container">
        <SubmitForm
          history = {props.history}
          match={props.match}
        />
      </div>
    </Fragment>
  );
};

export default SubmitQuotes;