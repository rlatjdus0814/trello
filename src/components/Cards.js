import React from 'react';
import '../App.css';
import cancel from '../img/cancel.png';
import edit from '../img/draw.png';

class Cards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cnt: 1,
      cardCnt: 0,
      editMode: false,
      id: props.id,
      index: props.index,
      content: props.card.content,
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
    if(props.card !== state.card ){
      return {
        props
      };
    }
    return null;
  }
  
  handleCardInput = (e) => {
    this.setState({
      content: e.target.value
    });
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
        this.props.setData(e.target.value);
        this.handleEdit();
      }
    }
  }

  handleRemove = (e) => {
    e.preventDefault();
    this.props.onRemove(this.state.id);
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
        });
      }
    }
  }

  render() {
    const {content, styleBG, styleItem, editMode} = this.state;
    return (
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
    ); 
  }
}

export default Cards;