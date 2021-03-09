import React from 'react';
import './App.css';
import plus from './img/plus.png';
import add from './img/add.png';
import butler from './img/butler.png';
import star from './img/star.png';
import more from './img/menu.png';
import moredark from './img/menu-dark.png';
import lock from './img/lock.png';
import downarrow from './img/down-arrow.png';
import cancel from './img/cancel.png';
import card from './img/template.png';
import write from './img/draw.png';

class App extends React.Component {
  render(){
    return (
      <div className="root">
        <Top></Top>
        <div className="container">
          <div className="wrap">
            <div className="header">
              <div className="header-left">
                <div className="header-left-board">
                  <a href="#" class="icon"><span class="icon-btn">Board</span>
                    <div className="downarrow-icon"><img src={downarrow} alt="downarrow" /></div>
                  </a>
                </div>
                <div className="header-left-test"><a href="#" class="icon"><span class="icon-btn-test">test</span></a></div>
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
                  <a href="#" class="icon">
                    <div className="private-icon">
                      <img src={lock} alt="private" />
                    </div>
                    <span className="icon-btn">Private</span>
                  </a>
                </div><span className="bar">│</span>
                <div className="header-left-profile"><a href="#" class="profile"><span class="icon-btn">김</span></a></div>
                <div className="header-left-invite"><a href="#" class="icon"><span class="icon-btn">Invite</span></a></div>
              </div>
              <div className="header-right">
                <div className="header-right-butler"><a href="#" class="icon">
                  <div className="butler-icon"><img src={butler} alt="butler" /></div><span class="icon-btn">Butler</span></a>
                </div>
                <div className="header-right-menu"><a href="#" class="icon">
                  <div className="menu-icon"><img src={more} alt="menu" /></div><span class="icon-btn">Show Menu</span></a>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="content-wrap">
                <div className="content-wrap-card">
                  <div className="card-top">
                    <div className="card-top-title">To Do</div>
                    <div className="card-top-menu"><img src={moredark} alt="menu" /></div>
                  </div>
                  <div className="card-compose">
                    <div className="card-compose-textarea">
                      <textarea placeholder="Enter a title for this card..."></textarea>
                    </div>
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
              <div className="content-wrap">
                <div className="content-wrap-card">
                  <div className="card-top">
                    <div className="card-top-title">Doing</div>
                    <div className="card-top-menu"><img src={moredark} alt="menu" /></div>
                  </div>
                  <div className="card-compose">
                    <div className="card-compose-card">
                      <span>Doing Card</span>
                      <div className="write-btn"><img src={write} alt="menu" /></div>
                    </div>
                    <div className="card-compose-card">
                    <span>Doing Card</span>
                      <div className="write-btn"><img src={write} alt="menu" /></div>
                    </div>
                    <div className="card-compose-create">
                      <div className="create">
                        <div className="create-left">
                          <div className="plus-btn" href="#"><img src={add} alt="plus" /></div>
                          <span>Add another card</span>
                        </div>
                        <div className="card-more"><img src={card} alt="more" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-wrap">
                <div className="content-wrap-card">
                  <div className="card-top">
                    <div className="card-top-title">Done</div>
                    <div className="card-top-menu"><img src={moredark} alt="menu" /></div>
                  </div>
                  <div className="card-compose">
                    <div className="card-compose-create">
                      <div className="create">
                        <div className="create-left">
                          <div className="plus-btn" href="#"><img src={add} alt="plus" /></div>
                          <span>Add another card</span>
                        </div>
                        <div className="card-more"><img src={card} alt="more" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-wrap">
                <div class="content-wrap-card2">
                  <div className="card-new">
                    <div className="plus-btnadd" href="#"><img src={plus} alt="plus" /></div>
                    <span>Add another list</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
