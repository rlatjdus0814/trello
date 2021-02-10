import React from 'react';
import PropTypes from 'prop-types';
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
  state = TodoData;
 
  // componentDidUpdate(prevProps, prevState) {
  //   if(prevProps.state !== prevState.state){
  //     this.fetchData(prevState.state);
  //   }
  // }

  static propTypes = {
    lists: PropTypes.object,
    cards: PropTypes.array,
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
      // const order = this.state.listOrder.map((todo) => {
      //   lists[todo];
      // })
      this.setState({
        // lists : {...order, 
        //   {`list-${this.state.listId+1}`:{id: `list-${this.state.listId+1}`,
        //   title: this.state.text,
        //   cardIds: [],
        // }}},
        // `list-${this.state.listId+1}`: {
        //   id: `list-${this.state.listId+1}`,
        //   title: this.state.text,
        //   cardIds: [],
        // },
        

        //const card = list.cardIds.map((data) => cards[data]);
        // lists: Object.assign({
        //   `list-${this.state.listId+1}`: {
        //     id: `list-${this.state.listId+1}`,
        //     title: this.state.text,
        //     cardIds: [],
        //   }
        // }),
        
        // lists: Object.assign(...lists, {
        //       id: `list-${this.state.listId+1}`,
        //       title: this.state.text,
        //       cardIds: [],
        //     }),
        listOrder: this.state.listOrder.concat(`list-${this.state.listId+1}`),
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
      listOrder: this.state.listOrder.filter((carditem) => carditem !== id)
    });
  }

  listUpdate = (id, data) => {
    this.setState({
      listOrder: this.state.listOrder.map((carditem) => carditem.id === id ? {...carditem, ...data} : carditem)
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
    const {lists, cards, listOrder, styleT, styleF, text} = this.state;
    console.log(TodoData);
    console.log(this.state);
    console.log(this.state.listOrder);
    console.log(this.state.lists);
    
    // // console.log(TodoData.lists);
    // const Data = TodoData.listOrder;
    // const list = Data.map((todo) => 
    //   TodoData.lists[todo].cardIds.map((data) => TodoData.cards[data])
    //   //const card = 
    //    //return list.data.map((data) => data);
    //   //return <List key={todoId} id={index} item={todo} title={todo.title} data={lists[index].data} className="list" onRemove={this.deleteList} onUpdate={this.listUpdate} />;
    // );
    // // console.log(Data);
    // console.log(list);
    // console.log(list[0]);
    //console.log(list.cardIds.map((data) => TodoData.cards[data]));
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
                {listOrder.map((todo) => {
                  const list = lists[todo];
                  console.log(list);
                  const card = list.cardIds.map((data) => cards[data]);
                  return <List key={list.id} id={list.id} list={list} card={card} title={list.title} TodoData={TodoData} onRemove={this.deleteList} onUpdate={this.listUpdate} />;
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