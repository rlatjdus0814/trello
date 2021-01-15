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
      selectedKey: -1,
      id: props.id,
      item: props.item,
      title: props.title,
      data: props.data,
      text: '',
      style:{
        border: 'none',
        background: '#ebecf0'
      },
    }
  }

  handleClick(key){
    this.setState({
      selectedKey: key
    })
  }

  setData = (data, index) => {
    const temp = [].concat(this.state.data);
    temp[index] = data;
    console.log(temp);
    this.setState({
      data: temp
    })
  }

  handleCardCreate = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  onAddCard = (e) =>{
    if(!(this.state.text == '')){
      if(e.key == 'Enter'){
        this.setState({
          data: this.state.data.concat(e.target.value),
          text: ''
        });
      }
    }
  }

  handleRemove = (index) => {
    const {data} = this.state;
    this.setState({
      data: data.filter(item => item.index !== index)
    })
    console.log(data);
  }

  render() {
    const {title, data, style, text} = this.state;
    const {handleModify, handleRemove} = this.props;
    const mapComponents = data.map((i) => {
      return (<Cards key={i} onClick={() => this.handleClick(i)} />);
    });
    
    return(
      <div className="list">
        <div className="content-wrap">
          <div className="content-wrap-card">
            <div className="card-top">
              <div className="card-top-title"><input value={title} style={style}></input></div>
              <div className="card-top-menu"><img src={moredark} alt="menu" /></div>
            </div>
            <div className="card-compose">
              { data.map((dataitem, index) => <Cards key={index} setData={(data) => this.setData(data, index)} data={dataitem} onModify={handleModify} onRemove={handleRemove} /> )}
              <div className="card-compose-create">
                <div className="create">
                  <input className="create-input" placeholder="Add another card" value={text} onKeyPress={this.onAddCard} onChange={this.handleCardCreate}></input>
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