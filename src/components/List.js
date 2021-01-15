import React from 'react';
import '../App.css';
import Cards from './Card/Cards.js';
import Textarea from './Card/Textarea.js';
import cancel from '../img/cancel.png';
import moredark from '../img/menu-dark.png';
import plus from '../img/plus.png';
import write from '../img/draw.png';
import add from '../img/add.png';
import card from '../img/template.png';

class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataKey: -1,
      item: props.item,
      title: props.title,
      data: props.data,
      text: '',
      style: {
        border: 'none',
        background: '#ebecf0'
      },
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
        background: '#ebecf0',
        outline: 'none'
      }
    });
  }

  handleTitleEdit = (e) => {
    if(!(this.title == '')){
      if(e.key == 'Enter'){
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
        this.setState({
          data: this.state.data.concat(e.target.value),
          text: ''
        });
      }
    }
  }

  RemoveData = (i) => {
    this.setState({
      data: this.state.data.filter((dataitem, index, newData) => index !== i )
    });
  }

  render() {
    const {title, data, style, text} = this.state;
    const CardComponents = data.map((dataitem, i) => {
      return (<Cards key={i} setData={(data) => this.setData(data, i)} data={dataitem} onRemove={() => this.RemoveData(i)} />);
    });
    
  return(
    <div className="list">
      <div className="content-wrap">
        <div className="content-wrap-card">
          <div className="card-top">
            <div className="card-top-title"><input value={title} style={style} onClick={this.titleClick} onChange={this.handleTitleInput} onKeyPress={this.handleTitleEdit}></input></div>
          </div>
          <div className="card-compose">
            { CardComponents }
            <div className="card-compose-create">
              <div className="create">
                <input className="create-input" placeholder="Add another card" value={text} onKeyPress={this.handleAddCard} onChange={this.handleCardCreate}></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
    );
  }
}

export default List;