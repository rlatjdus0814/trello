import React from 'react';
import '../App.css';
import butler from '../img/butler.png';
import star from '../img/star.png';
import more from '../img/menu.png';
import lock from '../img/lock.png';
import downarrow from '../img/down-arrow.png';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <div className="header-left-board">
            <a href="#" className="icon"><span className="icon-btn">Board</span>
              <div className="downarrow-icon"><img src={downarrow} alt="downarrow" /></div>
            </a>
          </div>
          <div className="header-left-test"><a href="#" className="icon"><span className="icon-btn-test">test</span></a></div>
          <div className="header-left-star">
            <a href="#" className="icon"><img src={star} alt="star" /></a>
          </div><span className="bar">│</span>
          <div className="header-left-workspace">
            <a href="#" className="icon">
              <div className="workspace">
                <span className="icon-btn">Trello workspace</span>
              </div>
              <span className="icon-btn-free">Free</span>
            </a>
          </div><span className="bar">│</span>
          <div className="header-left-private">
            <a href="#" className="icon">
              <div className="private-icon">
                <img src={lock} alt="private" />
              </div>
              <span className="icon-btn">Private</span>
            </a>
          </div><span className="bar">│</span>
          <div className="header-left-profile"><a href="#" className="profile"><span className="icon-btn">김</span></a></div>
          <div className="header-left-invite"><a href="#" className="icon"><span className="icon-btn">Invite</span></a></div>
        </div>
        <div className="header-right">
          <div className="header-right-butler"><a href="#" className="icon">
            <div className="butler-icon"><img src={butler} alt="butler" /></div><span className="icon-btn">Butler</span></a>
          </div>
          <div className="header-right-menu"><a href="#" className="icon">
            <div className="menu-icon"><img src={more} alt="menu" /></div><span className="icon-btn">Show Menu</span></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;