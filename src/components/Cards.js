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
      items: props.items,
      index: props.index,
      data: props.data,
      dataitem: props.dataitem,
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
    if(props.data !== state.data){
      return {
        data: props.data
      };
    }
    return null;
  }
  
  handleCardInput = (e) => {
    this.setState({
      data: e.target.value
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
    if(!(this.state.data === '')){
      if(e.key === 'Enter'){
        e.preventDefault();
        this.setState({
          data: e.target.value
        });
        this.handleEdit();
      }
    }
  }

  handleRemove = (e) => {
    e.preventDefault();
    this.props.onRemove(this.state.data);
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
    const {dataitem, styleBG, styleItem, editMode, index} = this.state;
    // console.log(data);
    // console.log(index);
    // console.log(dataitem);
    return (
      <Draggable key={index} draggableId={String(dataitem)} index={index}>
        {(provided) => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              <div className="card-color">
              <div className="card-compose-card" style={styleBG}>
                <form>
                  <div className="card-card">
                    <div className="card-item" style={styleItem}  onClick={this.cardColorChange}>
                      {editMode ? 
                        <input className="card-input" value={dataitem} name="cardInput" onChange={this.handleCardInput} onKeyPress={this.handleCardEdit} ></input>
                        : <p>{dataitem}</p> 
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
                    {/* <div className="cancel-btn">
                      <input className="submitBtn" type="submit" value='' onClick={this.props.onRemove} return false></input>
                    </div> */}
                  </div>
                </form>
              </div>
            </div>
            </div>
          )
        }
      </Draggable>
    ); 
  }
}

export default Cards;