import React, { Component } from 'react';
import '../../App.css';
import Textarea from '../Card/Textarea.js';
import cancel from '../../img/cancel.png';
import moredark from '../../img/menu-dark.png';

class Todo extends React.Component {
  render() {
    return (
      <div className="todo">
        <div className="content-wrap">
          <div className="content-wrap-card">
            <div className="card-top">
              <div className="card-top-title">To Do</div>
              <div className="card-top-menu"><img src={moredark} alt="menu" /></div>
            </div>
            <div className="card-compose">
              <Textarea />
              <div className="card-compose-create">
                <div className="create">
                  <div className="create-left">
                    <input className="create-btn" type="submit" value="Add Card"></input>
                    <div className="cancel-btn" href="#"><img src={cancel} alt="cancel" /></div>
                  </div>
                  <div className="card-more"><img src={moredark} alt="menu" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;