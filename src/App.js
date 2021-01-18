import React from 'react';
import './App.css';
import Top from './components/Top.js';
import Header from './components/Header.js';
import List from './components/List.js';
import plus from './img/plus.png';
import cancel from './img/cancel.png';
class App extends React.Component {
  state={
    addListMode: false,
    items: [
    //   {
    //   id: 0,
    //   title: 'weekend',
    //   data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    // },
    // {
    //   id: 1,
    //   title: 'subject',
    //   data: ['Korean', 'Math', 'Engilsh']
    // },
    {
      id: 2,
      title: 'genre',
      data: ['comedy', 'darama', 'horror', 'romance']
    }],
  }

  addList = (e) => {
    if(this.state.addListMode === true){
      this.setState({
        
      });
      console.log('ok')
  
      
    } else {
      this.setState({
        addListMode: true
      });
    }
    
      
    // this.setState({

    // });
  }

  render(){
    const {items} = this.state;
    return (
      <div className="root">
        <Top />
        <div className="container">
          <div className="wrap">
            <Header />
            <div className="content">
              {items.map((item) => <List key={item.id} item={item} title={item.title} data={item.data} />)}
              <div className="listTure" onClick={this.addList}>
                <div className="plus-btn"><img src={plus} alt="plus" /></div>
                <span>Add another card</span>
              </div>
              <div className="listFalse">
                <div className="listTitle"><input placeholder="Enter list title..."></input></div>
                <div className="listAddCan">
                  <div className="addBtn">Add List</div>
                  <div className="canBtn"><img src={cancel} alt="cancel" /></div>
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
