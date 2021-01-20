import React from 'react';
import '../App.css';
import Cards from './Cards.js';
import cancel from '../img/cancel.png';
class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: props.items,
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

  }

  render() {
    const {title, data, style, text, createT, createF} = this.state;
    const CardComponents = data.map((dataitem, i) => {
      return (<Cards key={i} id={i} setData={(data) => this.setData(data, i)} data={dataitem} onRemove={() => this.RemoveData(i)} />);
    });
    
  return(
    <div className="list">
      <div className="content-wrap">
        <div className="content-wrap-card">
          <div className="card-top">
            <div className="card-top-title"><input value={title} style={style} onClick={this.titleClick} onChange={this.handleTitleInput} onKeyPress={this.handleTitleEdit}></input></div>
            <div className="card-delete-btn" onClick={this.delList}><img src={cancel} alt="delete" /></div>
          </div>
          <div className="card-compose">
            { CardComponents }
            <div className="card-compose-create">
              <form>
                <div className="create-false" style={createF} onClick={this.createClick}>
                  <span>Add Card</span>
                </div>
                <div className="create-true" style={createT}>
                  <input className="create-input" placeholder="Add another card" value={text} onKeyPress={this.handleAddCard} onChange={this.handleCardCreate}></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>  
    );
  }
}

export default List;