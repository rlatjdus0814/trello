import React, { Component } from 'react';
import '../../App.css';
import write from '../../img/draw.png';

class Cards extends React.Component {
  render() {
    return (
      <div>
        <div className="card-compose-card">
          <span>Doing Card</span>
          <div className="write-btn"><img src={write} alt="menu" /></div>
        </div>
      </div>
    );
  }
}

export default Cards;