import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { resetServerContext } from 'react-beautiful-dnd';
import './App.css';
import Top from './components/Top.js';
import List from './components/List.js';
import plus from './img/plus.png';
import cancel from './img/cancel.png';

// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);
  
//   return result;
// };

resetServerContext();
class App extends React.Component {
  state={
    currentId: 3,
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
      id: 0,
      title: 'weekend',
      data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    {
      id: 1,
      title: 'subject',
      data: ['Korean', 'Math', 'Engilsh']
    },
    {
      id: 2,
      title: 'genre',
      data: ['comedy', 'darama', 'horror', 'romance']
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
          currentid: this.state.currentId+1,
          title: this.state.text,
          data: [],
        }),
        addListMode: true,
        text: ''
      });
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
      items: this.state.items.filter(carditem => carditem.id !== id)
    });
  }

  listUpdate = (id, data) => {
    this.setState({
      items: this.state.items.map((carditem) => id === carditem.id ? {...carditem, ...data} : carditem)
    });
  }

  handleOnDragEnd = (result) => {
    //console.log(result);
    //const itemdata = this.state.items.map((item, i) => ( item[i] ));
    const itemdata = this.state.items.map((item) => ( item.data.map((items) => (items) ) ));
    if(!result.destination) return;
    
    const currentCards = itemdata;
    const dragItemIndex = result.source.index;
    const dropItemIndex = result.destination.index;
    const removeCard = currentCards.splice(dragItemIndex, 1);

    // console.log(dragItemIndex);
    // console.log(dropItemIndex);
    // console.log(this.state.itemdata);
    currentCards.splice(dropItemIndex, 0, removeCard);
    this.setState({
      data: currentCards
    });
   
    // console.log(removeCard);
    // console.log(currentCards);

    // console.log(this.state.items);

    //const items = this.state.items.map((item)=> item.id === result.source.index);
   
    // const items = reorder(
    //   //this.state.items.map((item, i) => { return item = this.state.id}),
    //   //this.state.items,
    //   itemdata,
    //   result.source.index,
    //   result.destination.index
    // );

    // this.setState({
    //   items
    // });
  }

  render(){
    const {items, styleT, styleF, text} = this.state;
    const itemdata = this.state.items.map((item) => ( item.data.map((items) => (items) ) ));
    console.log(itemdata);
    return (
      <div className="root">
        <Top />
        <div className="top-hr"></div>
        <div className="container">
          <DragDropContext onDragEnd={this.handleOnDragEnd}>
            <div className="wrap">
              <div className="content">
                {items.map((item, index) => <List key={index} id={index} item={item} title={item.title} data={item.data} onRemove={this.deleteList} onUpdate={this.listUpdate} />)}
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
          </DragDropContext>
        </div>
      </div>
    );
  }
}

export default App;