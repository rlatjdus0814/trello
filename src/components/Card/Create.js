import React, { Component } from 'react';
import '../../App.css';
import add from '../../img/add.png';
import card from '../../img/template.png';

class Create extends React.Component {
  render() {
    return (
      <div className="create">
        <div className="create-left">
          <div className="plus-btn" href="#"><img src={add} alt="plus" /></div>
          <span>Add another card</span>
        </div>
        <div className="card-more"><img src={card} alt="more" /></div>
      </div>
    );
  }
}

export default Create;