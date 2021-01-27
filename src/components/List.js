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
      items: props.items,
      item: props.item,
      title: props.title,
      data: props.data,
      id: props.id,
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

  setData = (data, index) => {
    const temp = [].concat(this.state.data);
    temp[index] = data;
    this.setState({
      data: temp
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

  RemoveData = (i) => {
    this.setState({
      data: this.state.data.filter((dataitem, index, newData) => index !== i )
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
      addCardMode: false
    });
    this.createClick();
  }

  // findCard = (id) => {
  //   const card = cards.filter
  // }

  render() {
    const {title, data, id, style, text, createT, createF} = this.state;
 
  return(
    <div className="list">
      <div className="content-wrap">
        <div className="content-wrap-card">
          <div className="card-top">
            <div className="card-top-title"><input value={title} style={style} onClick={this.titleClick} onChange={this.handleTitleInput} onKeyPress={this.handleTitleEdit}></input></div>
            <div className="card-delete-btn" onClick={this.delList}><img src={cancel} alt="delete" /></div>
          </div>
          <Droppable droppableId={String(id)} type={String(id)===this.state.id ? "active" : "done"}>
            {provided => (
              <div className="card-compose" {...provided.droppableProps} ref={provided.innerRef}>
                { data.map((dataitem, i) => 
                  <Cards key={i} id={dataitem} index={i} className="card" setData={(data) => this.setData(data, i)} data={dataitem} onRemove={() => this.RemoveData(i)} moveCard={this.moveCard} findCard={this.findCard} />
                )}
                {String(id)}
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
