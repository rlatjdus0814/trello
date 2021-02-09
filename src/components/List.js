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
      addCardMode: false,
      id: props.id,
      list: props.list,
      card: props.card,
      title: props.title,
      todoData: props.todoData,
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
        this.setState({
          data: this.state.data.concat(e.target.value),
          text: ''
        });
        this.createClick();
      }
    }
  }

  RemoveData = (cardId) => {
    this.setState({
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
    const {id, list, card, title, data, todoData, style, text, createT, createF} = this.state;
    // console.log(data.map((dataitem, i) => data[i]));
    const cards = card.map((dataid) => dataid.id);
     console.log(cards);
    // console.log(card);
    // console.log(list);
    // console.log(list.cardIds);
    // console.log(card.filter((cardIds) => cardIds.id ));

    console.log(this.state.card.filter((item) => item.id !== cards));
    //console.log(this.state.card.filter((item) => item.id !== cardId));
    //console.log(list.cardIds.filter((id) => return id !==  ));
    //console.log(this.state.list.cardIds.filter((id) => id !== cardId ))
    // console.log(id);
  return(
    <div className="list">
      <div className="content-wrap">
        <div className="content-wrap-card">
          <div className="card-top">
            <div className="card-top-title"><input value={title} style={style} onClick={this.titleClick} onChange={this.handleTitleInput} onKeyPress={this.handleTitleEdit}></input></div>
            <div className="card-delete-btn" onClick={this.delList}><img src={cancel} alt="delete" /></div>
          </div>
          <Droppable droppableId={`${id}`}>
            {(provided) => (
              <div className="cards" {...provided.droppableProps} ref={provided.innerRef}>
                { card.map((card, i) => 
                  <Cards key={card.id} id={card.id} index={i} card={card} content={card.content} setData={(card) => this.setData(card, i)} onRemove={() => this.RemoveData(i)} />
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
                <input className="create-input" placeholder="Add another card" value={text} onKeyPress={this.handleAddCard} onChange={this.handleCardCreate}></input>
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