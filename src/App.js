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
  state = {
    cardId: 13,
    listId: 2,
    addListMode: true,
    text: '',
    styleT: {
      display: 'block'
    },
    styleF: {
      display: 'none'
    },
    cards: {
      '0': {id: 0, content: 'Monday'},
      '1': {id: 1, content: 'Tuesday'},
      '2': {id: 2, content: 'Wednesday'},
      '3': {id: 3, content: 'Thursday'},
      '4': {id: 4, content: 'Friday'},
      '5': {id: 5, content: 'Saturday'},
      '6': {id: 6, content: 'Sunday'},
      '7': {id: 7, content: 'Korean'},
      '8': {id: 8, content: 'Math'},
      '9': {id: 9, content: 'English'},
      '10': {id: 10, content: 'Comedy'},
      '11': {id: 11, content: 'Darama'},
      '12': {id: 12, content: 'Horror'},
      '13': {id: 13, content: 'Romace'},
    },
    lists: [
      {
        id: 0,
        title: 'weekend',
        cardIds: ['0', '1', '2', '3', '4', '5', '6']
      },{
        id: 1,
        title: 'subject',
        cardIds: ['7', '8', '9']
      },{
        id: 2,
        title: 'genre',
        cardIds: ['10', '11', '12', '13']
      },

    ]}
 
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
      // const order = this.state.listOrder.map((todo) => {
      //   lists[todo];
      // })
      this.setState({
        lists : [...this.state.lists, 
          {
            id: this.state.listId+1,
            title: this.state.text,
            cardIds: [],
          }
        ],
        // `list-${this.state.listId+1}`: {
        //   id: `list-${this.state.listId+1}`,
        //   title: this.state.text,
        //   cardIds: [],
        //},
        

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
      lists: this.state.lists.map((carditem) => carditem.id === id ? {...carditem, ...data} : carditem)
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
    const {lists, cards, cardId, listId, styleT, styleF, text} = this.state;
    //console.log(TodoData);
   // console.log(this.state);
    //console.log(this.state.listOrder);
    //console.log(this.state.lists);
    
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
                {lists.map((todo) => {
                  const list = todo;
                  const card = list.cardIds.map((data) => cards[data]);
                  //console.log(card);
                  //console.log(list.cardIds);
                  return <List key={list.id} id={list.id} lists={lists} list={list} card={card} cardIds={list.cardIds} title={list.title} cardId={cardId} listId={listId} onRemove={this.deleteList} onUpdate={this.listUpdate} />;
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