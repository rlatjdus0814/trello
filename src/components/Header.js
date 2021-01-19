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
            <div className="icon"><span className="icon-btn">Board</span>
              <div className="downarrow-icon"><img src={downarrow} alt="downarrow" /></div>
            </div>
          </div>
          <div className="header-left-test"><div className="icon"><span className="icon-btn-test">test</span></div></div>
          <div className="header-left-star">
            <div className="icon"><img src={star} alt="star" /></div>
          </div><span className="bar">│</span>
          <div className="header-left-workspace">
            <div className="icon">
              <div className="workspace">
                <span className="icon-btn">Trello workspace</span>
              </div>
              <span className="icon-btn-free">Free</span>
            </div>
          </div><span className="bar">│</span>
          <div className="header-left-private">
            <div className="icon">
              <div className="private-icon">
                <img src={lock} alt="private" />
              </div>
              <span className="icon-btn">Private</span>
            </div>
          </div><span className="bar">│</span>
          <div className="header-left-profile"><div className="profile"><span className="icon-btn">김</span></div></div>
          <div className="header-left-invite"><div className="icon"><span className="icon-btn">Invite</span></div></div>
        </div>
        <div className="header-right">
          <div className="header-right-butler"><div className="icon">
            <div className="butler-icon"><img src={butler} alt="butler" /></div><span className="icon-btn">Butler</span></div>
          </div>
          <div className="header-right-menu"><div className="icon">
            <div className="menu-icon"><img src={more} alt="menu" /></div><span className="icon-btn">Show Menu</span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;