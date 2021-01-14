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
  
  onModify = (data, e) => {
    // {data.map((datas, index) => {
    //   //console.log(datas[index]);
    // });}  
  }

  //handleCheck( )
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
    console.log(this.state.text);
    console.log(this.state.data);
  }

  onKeyPress = (e) =>{
    if(e.key == 'Enter'){
      this.setState({
        data: this.state.data.concat(e.target.value),
        text: ''
        
      });
    }
  }

  render() {
    const {title, data, style, text} = this.state;
    const {onModify} = this.props;
      return(
        <div className="list">
          <div className="content-wrap">
            <div className="content-wrap-card">
              <div className="card-top">
                <div className="card-top-title"><input value={title} style={style}></input></div>
                <div className="card-top-menu"><img src={moredark} alt="menu" /></div>
              </div>
              <div className="card-compose">
                { data.map((dataitem, index) => <Cards key={index} setData={(data) => this.setData(data, index)} data={dataitem} onModify={onModify} /> )}
                <div className="card-compose-create">
                  <div className="create">
                    <input className="create-input" placeholder="Add another card" value={text} onKeyPress={this.onKeyPress} onChange={this.handleCardCreate}></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="content-wrap">
            <div className="content-wrap-card">
              <div className="card-top">
                <div className="card-top-title">{title}</div>
                <div className="card-top-menu"><img src={moredark} alt="menu" /></div>
              </div>
              <div className="card-compose">
                <Textarea />
                <Textarea />
                <Textarea />
                <Textarea />
                <Textarea />
                <div className="card-compose-create">
                  <div className="create">
                    <div className="create-left">
                      <input className="create-btn" type="submit" value="Add Card"></input>
                      <div className="cancel-btn" href="#"><img src={cancel} alt="cancel" /></div>
                    </div>
                    <div className="card-more"><img src={moredark} alt="menu" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          
          {/* <div className="content-wrap">
            <div className="content-wrap-card">
              <div className="card-top">
                <div className="card-top-title">{title}</div>
                <div className="card-top-menu"><img src={moredark} alt="menu" /></div>
              </div>
              <div className="card-compose">
                <div className="card-compose-create">
                  <div className="create">
                    <div className="create-left">
                      <div className="plus-btn" href="#"><img src={add} alt="plus" /></div>
                      <span>Add another card</span>
                    </div>
                    <div className="card-more"><img src={card} alt="more" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-wrap">
            <div className="content-wrap-card2">
              <div className="card-new">
                <div className="plus-btnadd" href="#"><img src={plus} alt="plus" /></div>
                <span>Add another list</span>
              </div>
            </div>
          </div> */}
        </div>  
      );
  }
}

export default List;