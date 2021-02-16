import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import '../App.css';
import cancel from '../img/cancel.png';
import edit from '../img/draw.png';

class Cards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cnt: 1,
      editMode: false,
      id: props.id,
      index: props.index,
      card: props.card,
      content: props.content,
      style:{
        border: 'none',
        height: '20px'
      },
      styleBG:{
        background: '#ffffff'
      },
      color: ['#ffffff', '#fddfe3', '#fcfbed', ' #dff3eb', '#e5edf8', '#eee5f8']
    };
  };

  static getDerivedStateFromProps(props, state){
    if(props.card !== state.card){
      return {
        card: props.card
      };
    }
    return null;
  }
  
  handleCardInput = (e) => {
    this.setState({
      content: e.target.value
    });
    this.props.setData(e.target.value);
  }

  handleEdit = () => {
    const {editMode} = this.state;
    this.setState({
      editMode: !editMode
    });
  }
  
  handleCardEdit = (e) => {
    if(!(this.state.content === '')){
      if(e.key === 'Enter'){
        e.preventDefault();
        this.setState({
          content: e.target.value
        });
        this.handleEdit();
      }
    }
  }

  handleRemove = (e) => {
    e.preventDefault();
    this.props.onRemove(this.state.card.id);
    this.setState({
      styleBG: {
        background: '#ffffff'
      }
    });
  }

  cardColorChange = () => {
    const {color, cnt} = this.state;
    if(this.state.editMode === false){
      this.setState({
        styleBG: {
          background: color[cnt]
        },
        cnt: cnt + 1
      });
      if(cnt >= 5){
        this.setState({
          cnt: 0
        })
      }
    }
  }

  render() {
    const {content, styleBG, styleItem, card, editMode, index} = this.state;
    return (
      <Draggable key={index} draggableId={String(card.id)} index={index}>
        {(provided) => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              <div className="card-color">
              <div className="card-compose-card" style={styleBG}>
                <form>
                  <div className="card-card">
                    <div className="card-item" style={styleItem}  onClick={this.cardColorChange}>
                      {editMode ? 
                        <input className="card-input" value={content} name="cardInput" onChange={this.handleCardInput} onKeyPress={this.handleCardEdit} ></input>
                        : <p>{content}</p> 
                      }
                    </div>
                    <div className="card-btn">
                      <div className="edit-btn" onClick={this.handleEdit}>
                        <img src={edit} alt="edit" />
                      </div>
                      <div className="cancel-btn" onClick={this.handleRemove}>
                        <img src={cancel} alt="cancel" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            </div>
          )}
      </Draggable>
    ); 
  }
}

export default Cards;