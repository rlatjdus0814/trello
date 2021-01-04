import React, { Component } from 'react';
import '../../App.css';
import Create from '../Card/Create.js';
import moredark from '../../img/menu-dark.png';

class Done extends React.Component {
  render() {
    return (
      <div className="done">
        <div className="content-wrap">
          <div className="content-wrap-card">
            <div className="card-top">
              <div className="card-top-title">Done</div>
              <div className="card-top-menu"><img src={moredark} alt="menu" /></div>
            </div>
            <div className="card-compose">
              <div className="card-compose-create">
                <Create />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Done;