import React, { Component } from 'react';
import '../../App.css';
import write from '../../img/draw.png';

class Cards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: props.data,
    }
  }
  render() {
    const {data} = this.state;
    return (
      <div>
        <div className="card-compose-card">
          {data}
          <div className="write-btn"><img src={write} alt="menu" /></div>
        </div>
      </div>
    );
  }
}

export default Cards;