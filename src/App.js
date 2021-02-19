import React from 'react';
import './App.css';
import Top from './components/Top.js';
import List from './components/List.js';
import plus from './img/plus.png';
import cancel from './img/cancel.png';

class App extends React.Component {
  state = {
    listId: 2,
    addListMode: true,
    text: '',
    styleT: {
      display: 'block'
    },
    styleF: {
      display: 'none'
    },
    lists: [
      {
        id: 0,
        title: 'weekend',
        cards: [
          {id: 0, content: 'Monday'},
          {id: 1, content: 'Tuesday'},
          {id: 2, content: 'Wednesday'},
          {id: 3, content: 'Thursday'},
          {id: 4, content: 'Friday'},
          {id: 5, content: 'Saturday'},
          {id: 6, content: 'Sunday'},
        ]
      },{
        id: 1,
        title: 'subject',
        cards: [
          {id: 7, content: 'Korean'},
          {id: 8, content: 'Math'},
          {id: 9, content: 'English'},
        ]
      },{
        id: 2,
        title: 'genre',
        cards: [
          {id: 10, content: 'Comedy'},
          {id: 11, content: 'Darama'},
          {id: 12, content: 'Horror'},
          {id: 13, content: 'Romace'},
        ]
      }
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
      this.setState({
        lists : [...this.state.lists, 
          {
            id: this.state.listId+1,
            title: this.state.text,
            cards: [],
          }
        ],
        addListMode: true,
        text: '',
        listId: this.state.listId+1
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
      lists: this.state.lists.filter((listItem) => listItem.id !== id)
    });
    console.log(id);
  }

  listUpdate = (id, data) => {
    this.setState({
      lists: this.state.lists.map((listItem) => listItem.id === id ? {...listItem, ...data} : listItem)
    });
  }

  // handleCardCnt = () => {
  //   this.setState({
  //     cardId: this.state.cardId+1
  //   })
  // }

  // reorder = (cardList, startIndex, endIndex, droppableId) => {
  //   const result = Array.from(cardList[droppableId]);
  //   console.log(cardList);
  //   console.log(result);
  //   const [removed] = result.splice(startIndex, 1);
  //   result.splice(endIndex, 0, removed);
  //   return result;
  // };

  // handleOnDragEnd = (result) => {
  //   console.log(result);
  //   const { destination, source } = result;
  //   if(!destination) return;
  //   if(destination.index === source.index) return;

  //   if(destination.droppableId === source.droppableId){
  //     const cardData = this.state.lists.map((listItem) => (listItem.cards));
  //     console.log(cardData[source.droppableId]);
  //     const moveItem = this.reorder(
  //       cardData,
  //       source.index,
  //       destination.index,
  //       source.droppableId
  //     );
  //     console.log(moveItem);

  //     const updateData = {
  //       ...cardData,
  //       [source.droppableId]: moveItem
  //     };
  //     console.log(updateData);

  //     this.setState({
  //       ...this.state,
  //       lists: this.state.lists.map((newlists, i) => ({
  //                 ...newlists,
  //                 cards: updateData[i],
  //               }))
  //     });
  //     // const state = {
  //     //   ...this.state,
  //     //   lists: this.state.lists.map((newlists, i) => ({
  //     //             ...newlists,
  //     //             cards: updateData[i],
  //     //           }))
  //     // };
  //     // this.setState(state);
  //     return;
  //   };
  // }
  
  render(){
    const {lists, text, styleT, styleF} = this.state;
    return (
      <div className="root">
        <Top />
        <div className="top-hr"></div>
        <div className="container">
          <div className="wrap">
            <div className="content">
              {lists.map((list) => {
                return <List key={list.id} list={list} onRemove={this.deleteList} onUpdate={this.listUpdate} />;
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
        </div>
      </div>
    );
  }
}

export default App;