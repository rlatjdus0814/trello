import React from 'react';
import './App.css';
import Top from './components/Top.js';
import Header from './components/Header.js';
import List from './components/List.js';
import plus from './img/plus.png';
import cancel from './img/cancel.png';
class App extends React.Component {
  state={
    id: 3,
    addListMode: true,
    text: '',
    styleT:{
      display: 'block'
    },
    styleF:{
      display: 'none'
    },
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

  addList = () => {
    if(this.state.addListMode === true){
      this.setState({
        styleT: { display: 'none' },
        styleF: { display: 'block' },
        addListMode: false
      });
    } else {
      this.setState({
        styleT: { display: 'block' },
        styleF: { display: 'none' },
        addListMode : true
      });
    }
  }

  handleListInput = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  addBtn = () => {
    if(!(this.state.text === '')){
      this.setState({
        items: this.state.items.concat({
          id: this.id++,
          title: this.state.text,
          data: [],
        }),
        addListMode: true
      });
    } 
    this.addList();
  }

  render(){
    const {items, styleT, styleF, text} = this.state;
    return (
      <div className="root">
        <Top />
        <div className="container">
          <div className="wrap">
            <Header />
            <div className="content">
              {items.map((item) => <List key={item.id} item={item} title={item.title} data={item.data} />)}
              <div className="listTrue" onClick={this.addList} style={styleT}>
                <div className="listClickBefore">
                  <div className="plus-btn"><img src={plus} alt="plus" /></div>
                  <span>Add another card</span>
                </div>
              </div>
              <div className="listFalse" style={styleF}>
                <div className="listClickAfter">
                  <div className="listTitle"><input value={text} placeholder="Enter list title..." onChange={this.handleListInput} onKeyPress={this.handleListEnter}></input></div>
                  <div className="listAddCan">
                    <div className="addBtn" onClick={this.addBtn}>Add List</div>
                    <div className="canBtn" onClick={this.addList}><img src={cancel} alt="cancel" /></div>
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
