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
            cardIds: [],
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
      lists: this.state.lists.filter((carditem) => carditem.id !== id)
    });
  }

  listUpdate = (id, data) => {
    this.setState({
      lists: this.state.lists.map((carditem) => carditem.id === id ? {...carditem, ...data} : carditem)
    });
  }

  // handleCardCnt = () => {
  //   this.setState({
  //     cardId: this.state.cardId+1
  //   })
  // }

  reorder = (cardList, startIndex, endIndex, droppableId) => {
    const result = Array.from(cardList[droppableId]);
    console.log(cardList);
    console.log(result);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  handleOnDragEnd = (result) => {
    console.log(result);
    const { destination, source } = result;
    if(!destination) return;
    if(destination.index === source.index) return;

    if(destination.droppableId === source.droppableId){
      const cardData = this.state.lists.map((listItem) => (listItem.cardIds));
      console.log(cardData[source.droppableId]);
      const moveItem = this.reorder(
        cardData,
        source.index,
        destination.index,
        source.droppableId
      );
      console.log(moveItem);

      const updateData = {
        ...cardData,
        [source.droppableId]: moveItem
      };
      console.log(updateData);

      this.setState({
        ...this.state,
        lists: this.state.lists.map((newlists, i) => ({
                  ...newlists,
                  cardIds: updateData[i],
                }))
      });
      // const state = {
      //   ...this.state,
      //   lists: this.state.lists.map((newlists, i) => ({
      //             ...newlists,
      //             cardIds: updateData[i],
      //           }))
      // };
      // this.setState(state);
      return;
    };
  }
  
  render(){
    const {lists, cards, listId, styleT, styleF, text} = this.state;
    return (
      <div className="root">
        <Top />
        <div className="top-hr"></div>
        <div className="container">
          <div className="wrap">
            <div className="content">
              {lists.map((todo) => {
                const list = todo;
                const card = list.cardIds.map((data) => cards[data]);
                return <List key={list.id} id={list.id} lists={lists} list={list} card={card} cardIds={list.cardIds} title={list.title} onRemove={this.deleteList} onUpdate={this.listUpdate} />;
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