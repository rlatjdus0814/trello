import React from 'react';
import '../App.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Cards from './Cards.js';
import cancel from '../img/cancel.png';
import cancelC from '../img/cancel-circle.png';

class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      addCardMode: false,
      titleEditMode: false,
      id: props.list.id,
      index: props.index,
      title: props.list.title,
      cards: props.list.cards,
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
      },
      titleEditMode : true
    });
  }

  handleTitleEdit = (e) => {
    if(!(this.title === '')){
      if(e.key === 'Enter'){
        this.setState({
          title: e.target.value,
          titleEditMode: false
        });
        this.props.onLTitleEdit(e.target.value, this.state.id);
      } 
    }
  }

  setData = (cardCon, index) => {
    const listId = this.state.id;
    const newCard = [...this.state.cards];
    newCard[index] = {
      ...this.state.cards[index],
      content: cardCon
    }
    this.setState({
      cards: newCard
    });
    this.props.onSetCard(cardCon, index, listId);
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
        const index = this.state.cards.map((card, index)=> (index));
        const indexLeg = index.length;
        this.props.onAddCard(e.target.value, this.state.id, indexLeg);
        this.setState({
          cards: [...this.state.cards,
          {
            id: this.state.title+`${index.length}`,
            content: e.target.value
          }],
          text: ''
        });
        this.createClick();
      }
    }
  }

  RemoveData = (cardItemId) => {
    const id = this.state.id;
    this.setState({
      cards: this.state.cards.filter((dataitem, item, newData) => cardItemId !== item),
    });
    this.props.onRemoveCard(cardItemId, id);
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

  handleColorChange = (id) => {
    this.props.onColor(id);
  }

  handleOnDragEnd = (result) => {
    const { destination, source } = result;
    if(!destination) return;

    const currentCards = [...this.state.cards];
    const draggingCardIndex = source.index;
    const afterDragCardIndex = destination.index;
    const removeCard = currentCards.splice(draggingCardIndex, 1);
    currentCards.splice(afterDragCardIndex, 0, removeCard[0]);

    this.setState({
      cards: currentCards
    });
    this.props.dragEnd(result, this.state.id);
  }

  render() {
    const {id, cards, title, style, text, titleEditMode, createT, createF} = this.state;
    return(
      <div className="list">
        <div className="content-wrap">
          <div className="content-wrap-card">
            <div className="card-top">
              <div className="card-top-title">
                {titleEditMode ?
                  <input value={title} style={style} onChange={this.handleTitleInput} onKeyPress={this.handleTitleEdit}></input>
                  : <h4 onClick={this.titleClick}>{title}</h4>
                }
              </div>
              <div className="card-delete-btn" onClick={this.delList}><img src={cancel} alt="delete" /></div>
            </div>
            <DragDropContext onDragEnd={this.handleOnDragEnd}>
              <Droppable droppableId={String(id)}>
                {provided => (
                  <div className="cards" {...provided.droppableProps} ref={provided.innerRef}>
                  { cards.map((card, index) => 
                    <Draggable key={card.id} draggableId={card.id} index={index}>
                      {provided => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <Cards key={card.id} id={card.id} index={index} card={card} setData={(value) => this.setData(value, index)} onRemove={() => this.RemoveData(index, id)} onColorChange={this.handleColorChange} />
                        </div>
                      )}
                    </Draggable>
                  )}
                  {provided.placeholder}
                </div>
                )}
              </Droppable>
            </DragDropContext>
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
