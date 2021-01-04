import React, { Component } from 'react';
import '../../App.css';
import Cards from '../Card/Cards.js';
import Create from '../Card/Create.js';
import moredark from '../../img/menu-dark.png';

class Doing extends React.Component {
  render() {
    return (
      <div className="doing">
        <div className="content-wrap">
          <div className="content-wrap-card">
            <div className="card-top">
              <div className="card-top-title">Doing</div>
              <div className="card-top-menu"><img src={moredark} alt="menu" /></div>
            </div>
            <div className="card-compose">
              <Cards />
              <Cards />
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

export default Doing;