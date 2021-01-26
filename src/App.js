import React from 'react';
//import { DragDropContext } from 'react-beautiful-dnd';
// import { resetServerContext } from 'react-beautiful-dnd';
import './App.css';
import Top from './components/Top.js';
import List from './components/List.js';
import plus from './img/plus.png';
import cancel from './img/cancel.png';

class App extends React.Component {
  state={
    currentId: 3,
    listId: 14,
    addListMode: true,
    text: '',
    styleT:{
      display: 'block'
    },
    styleF:{
      display: 'none'
    },
    items: [
      {
      id: `list-${0}`,
      title: 'weekend',
      data: [
        { id:`card-${0}`, cardText: 'Monday'},
        { id:`card-${1}`, cardText: 'Tuesday'},
        { id:`card-${2}`, cardText: 'Wednesday'},
        { id:`card-${3}`, cardText: 'Thursday'},
        { id:`card-${4}`, cardText: 'Friday'},
        { id:`card-${5}`, cardText: 'Saturday'},
        { id:`card-${6}`, cardText: 'Sunday'},
      ]
    },
    {
      id: `list-${1}`,
      title: 'subject',
      data: [
        { id:`card-${7}`, cardText: 'Korean'},
        { id:`card-${8}`, cardText: 'Math'},
        { id:`card-${9}`, cardText: 'English'},
      ]
    },
    {
      id: `list-${2}`,
      title: 'genre',
      data: [
        { id:`card-${10}`, cardText: 'comedy'},
        { id:`card-${11}`, cardText: 'darama'},
        { id:`card-${12}`, cardText: 'horror'},
        { id:`card-${13}`, cardText: 'romance'},
      ]
    }],
  }

  addList = () => {
    (this.state.addListMode) ? 
    this.setState({
      styleT: { display: 'none' },
      styleF: { display: 'block' },
      addListMode: false
    }) : 
    this.setState({
      styleT: { display: 'block' },
      styleF: { display: 'none' },
      addListMode : true
    });
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
          id: `list-${this.state.listId}`,
          title: this.state.text,
          data: [],
        }),
        addListMode: true,
        text: ''
      });
      this.state.listId += 1;
    } 
    this.addList();
  }

  handleListEnter = (e) => {
    if(e.key === 'Enter' || e.onClick ){
      this.addBtn();
    }
  }

  deleteList = (id) => {
    this.setState({
      items: this.state.items.filter((listitem) => listitem.id !== id)
    });
  }

  listUpdate = (id, data) => {
    this.setState({
      items: this.state.items.map((listitem) => id === listitem.id ? {...listitem, ...data} : listitem)
    });
  }

  // handleDragEnd = () =>{

  // }

  render(){
    const {items, styleT, styleF, text} = this.state;
    return (
      <div className="root">
        <Top />
        <div className="top-hr"></div>
        <div className="container">
          
            <div className="wrap">
              <div className="content">
                {items.map((item) => <List key={item.id} id={item.id} title={item.title} data={item.data} cardText={item.data.cardText} onRemove={this.deleteList} onUpdate={this.listUpdate} />)}
                <div className="listTrue" onClick={this.addList} style={styleT}>
                  <div className="listClickBefore">
                    <div className="plus-btn"><img src={plus} alt="plus" /></div>
                    <span>Add another list</span>
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


