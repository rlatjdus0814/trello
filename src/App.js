import React from 'react';
import './App.css';
import Top from './components/Top.js';
import List from './components/List.js';
import plus from './img/plus.png';
import cancel from './img/cancel.png';

class App extends React.Component {
  state = {
    listId: 2,
    cardId: 13,
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
          {id: 'weekend0', content: 'Monday'},
          {id: 'weekend1', content: 'Tuesday'},
          {id: 'weekend2', content: 'Wednesday'},
          {id: 'weekend3', content: 'Thursday'},
          {id: 'weekend4', content: 'Friday'},
          {id: 'weekend5', content: 'Saturday'},
          {id: 'weekend6', content: 'Sunday'},
        ]
      },{
        id: 1,
        title: 'subject',
        cards: [
          {id: 'subject0', content: 'Korean'},
          {id: 'subject1', content: 'Math'},
          {id: 'subject2', content: 'English'},
        ]
      },{
        id: 2,
        title: 'genre',
        cards: [
          {id: 'genre0', content: 'Comedy'},
          {id: 'genre1', content: 'Darama'},
          {id: 'genre2', content: 'Horror'},
          {id: 'genre3', content: 'Romace'},
        ]
      }
    ]
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
  }

  listUpdate = (id, data) => {
    this.setState({
      lists: this.state.lists.map((listItem) => listItem.id === id ? {...listItem, ...data} : listItem)
    });
  }

  handleRemoveCard = (cardItem, id) => {
    const cards = this.state.lists.map((list) => (list.cards));
    const newCardList = cards[id].filter((dataitem, item, newData) => cardItem !== item);
    this.setState({
      lists: this.state.lists.map((newlists) => ({
        ...newlists,
        cards: newCardList
      }))
    });
  }

  handleCardCnt = (e, listId, index) => {
    const titleId = this.state.lists.map((list) => (list.title));
    const newList = this.state.lists.map((list) => (list.cards));
    newList[listId] = [
      ...newList[listId],
      {
        id: titleId[listId]+`${index}`,
        content: e
      }
    ];
    this.setState({
      lists: this.state.lists.map((list, i) => ({
        ...list,
        cards: newList[i]
      })),
      cardId: this.state.cardId+1
    });
  }

  handleLTitleEdit = (lTitle, id) => {
    const newTitle = [...this.state.lists];
    newTitle[id] = {
      ...this.state.lists[id],
      title: lTitle
    }
    console.log(newTitle);
    this.setState({
      lists: newTitle
    })
  } 

  handleSetCard = (cContent, index, listId) => {
    const newList = this.state.lists.map((list) => (list.cards));
    const listIdx = newList[listId];
    listIdx[index] = {
      ...listIdx[index],
      content: cContent
    }
    newList[listId] = listIdx;
    this.setState({
      lists: this.state.lists.map((list, i) => ({
        ...list,
        cards: newList[i]
      }))
    })
  }

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
    //console.log(this.state);
    return (
      <div className="root">
        <Top />
        <div className="top-hr"></div>
        <div className="container">
          <div className="wrap">
            <div className="content">
              {lists.map((list, index) => {
                return <List key={list.id} index={index} list={list} onRemove={this.deleteList} onUpdate={this.listUpdate} onRemoveCard={this.handleRemoveCard} onCardCnt={this.handleCardCnt} onLTitleEdit={this.handleLTitleEdit} onSetCard={this.handleSetCard} />;
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