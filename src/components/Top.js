import React from 'react';
import '../App.css';
import home from '../img/home.png';

class Top extends React.Component {
  render() {
    return (
      <div className="top">
        <div className="top-left">
          <div className="top-left-home"><div className="icon"><img src={home} alt="home" /></div></div>
        </div> 
        <div className="top-center">
          <div className="top-center logo"><div className="icon">To Do :-)</div></div>
        </div>
      </div>
    );
  }
}

export default Top;