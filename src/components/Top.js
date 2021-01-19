import React from 'react';
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
          <div className="top-left-home"><div className="icon"><img src={home} alt="home" /></div></div>
          <div className="top-left-boards"><div className="icon"><img src={trello} alt="boards" /></div></div>
          <div className="top-left-search"><div className="icon"><img src={search} alt="search" /></div></div>
        </div>
        <div className="top-center">
          <div className="top-center logo"><div className="icon"><img src={trello} alt="trello" /> Trello</div></div>
        </div>
        <div className="top-right">
          <div className="top-right-create"><div className="icon"><img src={plus} alt="create" /></div></div>
          <div className="top-right-info"><div className="icon"><img src={info} alt="info" /></div></div>
          <div className="top-right-alarm"><div className="icon"><img src={alarm} alt="noti" /></div></div>
          <div className="top-right-profile"><div className="profile"><span>김</span></div></div>
        </div>
      </div>
    );
  }
}

export default Top;