import React from 'react';
import './App.css';
import firebase from 'firebase';
import "firebase/firestore";
import Top from './components/Top.js';
import List from './components/List.js';
import plus from './img/plus.png';
import cancel from './img/cancel.png';

var firebaseConfig = {
  apiKey: "AIzaSyDsJuSI0Ahz6Th1fiy1e-Oy6rhEzmbCRWk",
  authDomain: "todolist-4b0dc.firebaseapp.com",
  projectId: "todolist-4b0dc",
  storageBucket: "todolist-4b0dc.appspot.com",
  messagingSenderId: "952405086276",
  appId: "1:952405086276:web:1417f21f7991d6e6a42c11",
  measurementId: "G-3TW4DL3F3V"
};

firebase.initializeApp(firebaseConfig); //firebase 초기화
var db = firebase.firestore();

/*
db.collection("calendar")
  .onSnapshot((snapshot) => {
    setUsers(
      snapshot.docs.map((doc) => (
        {
          id: doc.id, 
          title: doc.data().title, 
          comment: doc.data().comment, 
          day: doc.data().day,
        }
      ))
    );
  });
  */



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
    lists: []
  }

  componentDidMount() {
    db.collection("lists").get().then((snapshot) => {
      const newList = snapshot.docChanges().map((change) => ({
        id: change.doc.data().id,
        title: change.doc.data().title,
        cards: change.doc.data().cards
      }));
      console.log(newList);
      this.setState({
        lists: newList
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(nextState.lists);
    console.log(this.state.lists);
    if(this.state.lists !== nextState.lists) return true;
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
        addListMode: true
      });
  }

  handleListInput = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  addBtn = () => {
    if (!(this.state.text === '')) {
      this.setState({
        lists: [...this.state.lists,
        {
          id: this.state.listId + 1,
          title: this.state.text,
          cards: [],
        }
        ],
        addListMode: true,
        text: '',
        listId: this.state.listId + 1
      });
    }
    this.addList();
    db.collection("lists").doc(`list${this.state.listId + 1}`).onSnapshot();
    db.collection("lists").doc(`list${this.state.listId + 1}`).set({
      id: this.state.listId + 1,
      title: this.state.text,
      cards: []
    });
  }

  handleListEnter = (e) => {
    if (e.key === 'Enter' || e.onClick) {
      this.addBtn();
    }
  }

  deleteList = (id) => {
    this.setState({
      lists: this.state.lists.filter((listItem) => listItem.id !== id)
    });
    db.collection("lists").doc(`list${id}`).delete();
  }

  listUpdate = (id, data) => {
    this.setState({
      lists: this.state.lists.map((listItem) => listItem.id === id ? { ...listItem, ...data } : listItem)
    });
  }

  handleRemoveCard = (cardItem, listId) => {
    console.log(cardItem);
    console.log(listId);
    const cards = this.state.lists.map((list) => (list.cards));
    const newCardList = cards[listId].filter((dataitem, item, newData) => cardItem !== item);
    this.setState({
      lists: this.state.lists.map((newlists) => ({
        ...newlists,
        cards: newCardList
      }))
    });
    var cardRef = db.collection("lists").doc(`list${listId}`);
    cardRef.update({
      cards: newCardList
    });
  }

  handleAddCard = (e, listId, index) => {
    const titleId = this.state.lists.map((list) => (list.title));
    const newList = this.state.lists.map((list) => (list.cards));
    newList[listId] = [
      ...newList[listId],
      {
        id: titleId[listId] + `${index}`,
        content: e
      }
    ];
    this.setState({
      lists: this.state.lists.map((list, i) => ({
        ...list,
        cards: newList[i]
      }))
    });
    const cardValue = {
      id: titleId[listId] + `${index}`,
      content: e
    }
    //var cardRef = db.collection("lists").doc(`list${listId}`).collection("cards").doc("card");
    var cardRef = db.collection("lists").doc(`list${listId}`);
    cardRef.update({
      cards: firebase.firestore.FieldValue.arrayUnion(cardValue)
    });
  }

  handleLTitleEdit = (lTitle, id) => {
    const newTitle = [...this.state.lists];
    newTitle[id] = {
      ...this.state.lists[id],
      title: lTitle
    }
    this.setState({
      lists: newTitle
    });
    db.collection("lists").doc(`list${id}`).update({
      title: lTitle
    });
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
    });
    var cardRef = db.collection("lists").doc(`list${listId}`);
    cardRef.update({
      cards: listIdx
    });
  }

  handleDragEnd = (result, listId) => {
    const { destination, source } = result;
    if (!destination) return;

    const newCards = this.state.lists.map((list) => (list.cards));
    const currentCards = [...newCards[listId]];
    const draggingCardIndex = source.index;
    const afterDragCardIndex = destination.index;
    const removeCard = currentCards.splice(draggingCardIndex, 1);
    currentCards.splice(afterDragCardIndex, 0, removeCard[0]);

    const repageLists = this.state.lists.map((list) => (list));
    repageLists[listId] = {
      ...this.state.lists[listId],
      cards: currentCards
    }
    this.setState({
      lists: repageLists
    });
    db.collection("lists").doc(`list${listId}`).update({
      cards: currentCards
    })
  }

  render() {
    const { lists, text, styleT, styleF } = this.state;
    return (
      <div className="root">
        <Top />
        <div className="top-hr"></div>
        <div className="container">
          <div className="wrap">
            <div className="content">
              {lists.map((list, index) => {
                return <List key={list.id} index={index} list={list} onRemove={this.deleteList} onUpdate={this.listUpdate} onRemoveCard={this.handleRemoveCard} onAddCard={this.handleAddCard} onLTitleEdit={this.handleLTitleEdit} onSetCard={this.handleSetCard} dragEnd={this.handleDragEnd} />;
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