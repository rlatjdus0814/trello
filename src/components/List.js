import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import '../App.css';
import Cards from './Cards.js';
import cancel from '../img/cancel.png';
import cancelC from '../img/cancel-circle.png';
class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cardId: 14,
      addCardMode: false,
      id: props.id,
      lists: props.lists,
      list: props.list,
      card: props.card,
      cardIds: props.cardIds,
      title: props.title,
      text: '',
      style: {
        border: 'none',
      },
      createT: {
        display: 'none'
      },
      createF: {
        display: 'block'
      }
    };
  }

  static getDerivedStateFromProps(props, state){
    if(props.lists !== state.lists || props.cardIds !== state.cardIds){
      return {
        lists: props.lists,
        
      };
    }
    return null;
  }

  handleTitleInput = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  titleClick = () => {
    this.setState({
      style: {
        border: 'none',
        outline: 'none'
      }
    });
  }

  handleTitleEdit = (e) => {
    if(!(this.title === '')){
      if(e.key === 'Enter'){
        this.setState({
          title: e.target.value
        });
      } 
    }
  }

  setData = (content, index) => {
    const temp = [].concat(this.state.content);
    temp[index] = content;
    this.setState({
      content: temp
    });
  }

  handleCardCreate = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  handleAddCard = (e) =>{
    if(!(this.state.text === '')){
      if(e.key === 'Enter'){
        e.preventDefault();
        // const newCardIds = [
        //   ...this.state.cardIds.concat(`${this.state.cardId}`)
        // ];
        // console.log(newCardIds);

        // this.setState({
        //   list: {
        //     ...this.state.list,
        //     cardIds: newCardIds
        //   },
        //   cardIds: newCardIds,
        //   card: this.state.card.concat({
        //         id: this.state.cardId,
        //         content: e.target.value,
        //         }),
        //   text: '',
        // })
        
        const newCardIds = this.state.cardIds.concat(`${this.state.cardId}`);
        // const newCardIds = [
        //   ...this.state.cardIds, (`${this.state.cardId}`)
        // ];
        console.log('enter', newCardIds);
        
        this.setState({
          list: Object.assign(this.state.list, {
            cardIds: newCardIds
          }),
          cardIds: newCardIds,
          card: this.state.card.concat({
            id: this.state.cardId,
            content: e.target.value,
          }),
          text: '',
        });
        this.onCardCnt();
        this.createClick();
      }
    }
  }

  onCardCnt = () => {
    this.setState({
      cardId: this.state.cardId+1
    })
  }

  RemoveData = (cardId) => {
    this.setState({
      list: {
        ...this.state.list,
        cardIds: this.state.cardIds.filter((dataitem, item, newData) => item !== cardId ),
      },
      cardIds: this.state.cardIds.filter((dataitem, item, newData) => item !== cardId ),
      card: this.state.card.filter((dataitem, item, newData) => item !== cardId )
    });
  }

  delList = () => {
    this.props.onRemove(this.state.id);
  }

  createClick = () => {
    (this.state.addCardMode) ? 
    this.setState({
      createT: { display: 'none' },
      createF: { display: 'block' },
      addCardMode: false
    }) : 
    this.setState({
      createT: { display: 'block' },
      createF: { display: 'none' },
      addCardMode : true
    });
  }

  cancelClick = () => {
    this.setState({
      addCardMode: false,
      text: ''
    });
    this.createClick();
  }

  render() {
    const {card, list, lists, title, cardIds, style, text, createT, createF} = this.state;
      console.log(card.content);
      console.log(cardIds);
      console.log(lists);
      card.map((ca, i) =>{
        console.log(ca.id);
        console.log(i);
      })
  return(
    <div className="list">
      <div className="content-wrap">
        <div className="content-wrap-card">
          <div className="card-top">
            <div className="card-top-title"><input value={title} style={style} onClick={this.titleClick} onChange={this.handleTitleInput} onKeyPress={this.handleTitleEdit}></input></div>
            <div className="card-delete-btn" onClick={this.delList}><img src={cancel} alt="delete" /></div>
          </div>
          <Droppable droppableId={String(list.id)}>
            {(provided) => (
              <div className="cards" {...provided.droppableProps} ref={provided.innerRef}>
                { card.map((card, i) => 
                  <Cards key={card.id} id={card.id} index={i} card={card} lists={lists} content={card.content} setData={(card) => this.setData(card, i)} onRemove={() => this.RemoveData(i)} />
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <div className="card-compose-create">
            <form>
              <div className="create-false" style={createF} onClick={this.createClick} >
                <span>Add Card</span>
              </div>
              <div className="create-true" style={createT}>
                <input className="create-input" placeholder="Add another card" value={text} onKeyPress={this.handleAddCard.bind(this)} onChange={this.handleCardCreate}></input>
                <div className="create-cancelBtn" onClick={this.cancelClick}>
                  <img src={cancelC} alt="cancel" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>  
    );
  }
}

export default List;