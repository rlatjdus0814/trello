import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { resetServerContext } from 'react-beautiful-dnd';
import './App.css';
import Top from './components/Top.js';
import List from './components/List.js';
import TodoData from './components/TodoData.js';
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
    todoData: TodoData
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
        lists: this.state.lists.concat({
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
    //his.setState({lists: this.state.lists.filter(carditem => carditem.id !== id)}
    this.setState({
      lists: this.state.lists.filter((carditem) => carditem.id !== id)
    });
  }

  listUpdate = (id, data) => {
    this.setState({
      lists: this.state.lists.map((carditem) => id === carditem.id ? {...carditem, ...data} : carditem)
    });
  }

  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  // handleOnDragEnd = (result) => {
  //   console.log(result);
  //   const { destination, source } = result;
  //   //if(!destination) return;
  //   if(destination.droppableId === source.droppableId && destination.index === source.index) return;
    
  //   if(destination.droppableId === source.droppableId){
  //     const itemData = this.state.lists.map((item) => (item.data));

  //     const moveItem = this.reorder(
  //       itemData[source.droppableId],
  //       source.index,
  //       destination.index
  //     );

  //     const updateData = {
  //       ...itemData,
  //       [source.droppableId]: moveItem
  //     };
  //     console.log(updateData);

  //     const newState = {
  //       ...this.state,
  //       lists: this.state.lists.map((newlists, i) => ({
  //                 ...newlists,
  //                 data: updateData[i],
  //               }))
  //     };
  //     this.setState(newState);
  //     return;
  //     //console.log(newState);
  //   };
  //}
  
  render(){
    const {styleT, styleF, text, todoData} = this.state;
    console.log(todoData.lists);
    const Data = todoData.listOrder;
    const list = Data.map((todo) => 
      todoData.lists[todo].cardIds.map((data) => todoData.cards[data])
      //const card = 
       //return list.data.map((data) => data);
      //return <List key={todoId} id={index} item={todo} title={todo.title} data={lists[index].data} className="list" onRemove={this.deleteList} onUpdate={this.listUpdate} />;
    );
    console.log(Data);
    console.log(list);
    console.log(list[0]);
    //console.log(list.cardIds.map((data) => todoData.cards[data]));
    //console.log(list.datas.map((data) => data));
    //console.log(list.data.map((data)=> (data)));
    return (
      <div className="root">
        <Top />
        <div className="top-hr"></div>
        <div className="container">
          <DragDropContext>
            <div className="wrap">
              <div className="content">
                {todoData.listOrder.map((todo) => {
                  const list = todoData.lists[todo];
                  const card = list.cardIds.map((data) => todoData.cards[data]);
                  return <List key={list.id} id={list.id} list={list} card={card} title={list.title} todoData={todoData} className="list" onRemove={this.deleteList} onUpdate={this.listUpdate} />;
                })}
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