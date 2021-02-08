import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { resetServerContext } from 'react-beautiful-dnd';
import './App.css';
import Top from './components/Top.js';
import List from './components/List.js';
import plus from './img/plus.png';
import cancel from './img/cancel.png';

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
 
  // componentDidUpdate(prevProps, prevState) {
  //   if(prevProps.state !== prevState.state){
  //     this.fetchData(prevState.state);
  //   }
  // }

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
    //this.setState((prevState, prevProps)=>)
    //his.setState({items: this.state.items.filter(carditem => carditem.id !== id)}
    this.setState({
      items: this.state.items.filter((carditem) => carditem.id !== id)
    });
  }

  listUpdate = (id, data) => {
    this.setState({
      items: this.state.items.map((carditem) => id === carditem.id ? {...carditem, ...data} : carditem)
    });
  }

  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  handleOnDragEnd = (result) => {
    console.log(result);
    const { destination, source } = result;
    if(!destination) return;
    if(destination.droppableId === source.droppableId && destination.index === source.index) return;
    
    if(destination.droppableId === source.droppableId){
      const itemData = this.state.items.map((item) => (item.data));

      const moveItem = this.reorder(
        itemData[source.droppableId],
        source.index,
        destination.index
      );

      const updateData = {
        ...itemData,
        [source.droppableId]: moveItem
      };
      console.log(updateData);

      const newState = {
        ...this.state,
        items: this.state.items.map((newItems, i) => ({
                  ...newItems,
                  data: updateData[i],
                }))
      };
      this.setState(newState);
      return;
      //console.log(newState);
    };
  }
  
  render(){
    const {items, styleT, styleF, text} = this.state;
    // console.log(this.state);
    // console.log(this.state.items);
    return (
      <div className="root">
        <Top />
        <div className="top-hr"></div>
        <div className="container">
          <DragDropContext onDragEnd={this.handleOnDragEnd}>
            <div className="wrap">
              <div className="content">
                {items.map((item, index) => <List key={index} id={index} item={item} title={item.title} data={items[index].data} className="list" onRemove={this.deleteList} onUpdate={this.listUpdate} />)} 
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