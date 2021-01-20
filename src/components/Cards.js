import React from 'react';
import '../App.css';
import cancel from '../img/cancel.png';
import edit from '../img/draw.png';

class Cards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cnt: 1,
      editMode: true,
      key: props.id,
      item: props.item,
      data: props.data,
      style:{
        border: 'none',
        height: '20px'
      },
      styleBG:{
        background: '#ffffff'
      },
      color: ['#ffffff', '#fddfe3', '#fcfbed', ' #dcf5eb', '#e5edf8', '#eee5f8']
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
    console.log(this.state.data);
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
        e.focus();
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
  }

  cardColorChange = () => {
    const {color, cnt} = this.state;
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

  render() {
    const {data, styleBG, styleItem, editMode} = this.state;
    return (
      <div className="card-color" onClick={this.cardColorChange}>
        <div className="card-compose-card" style={styleBG}>
          <form>
            <div className="card-card">
              <div className="card-item" style={styleItem}>
                {
                  editMode ? <p>{data}</p> : 
                  <input className="card-input" value={data} name="cardInput" onChange={this.handleCardInput} onKeyPress={this.handleCardEdit} ></input>
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
    ); 
  }
}

export default Cards;