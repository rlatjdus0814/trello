import React, { Component } from 'react';
import '../App.css';
import home from '../img/home.png';
import info from '../img/info.png';
import alarm from '../img/alarm.png';
import search from '../img/search.png';
import trello from '../img/trello.png';
import plus from '../img/plus.png';

class Top extends React.Component {
  render() {
    return (
      <div className="top">
        <div className="top-left">
          <div className="top-left-home"><a href="#" className="icon"><img src={home} alt="home" /></a></div>
          <div className="top-left-boards"><a href="#" className="icon"><img src={trello} alt="boards" /></a></div>
          <div className="top-left-search"><a href="#" className="icon"><img src={search} alt="search" /></a></div>
        </div>
        <div className="top-center">
          <div className="top-center logo"><a href="#" className="icon"><img src={trello} alt="trello" /> Trello</a></div>
        </div>
        <div className="top-right">
          <div className="top-right-create"><a href="#" className="icon"><img src={plus} alt="create" /></a></div>
          <div className="top-right-info"><a href="#" className="icon"><img src={info} alt="info" /></a></div>
          <div className="top-right-alarm"><a href="#" className="icon"><img src={alarm} alt="noti" /></a></div>
          <div className="top-right-profile"><a href="#" className="profile"><span>김</span></a></div>
        </div>
      </div>
    );
  }
}

export default Top;