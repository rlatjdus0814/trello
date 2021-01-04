import React, { Component } from 'react';
import '../../App.css';
import plus from '../../img/plus.png';

class Add extends React.Component {
  render() {
    return (
      <div>
        <div className="content-wrap">
          <div className="content-wrap-card2">
            <div className="card-new">
              <div className="plus-btnadd" href="#"><img src={plus} alt="plus" /></div>
              <span>Add another list</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Add;