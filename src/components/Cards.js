import React from 'react';
import '../App.css';
import cancel from '../img/cancel.png';

class Cards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      key: props.key,
      item: props.item,
      data: this.props.data,
      style:{
        border: 'none',
        height: '20px'
      }
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

  writeClick = () => {
    if(this.state.style.height === '20px'){
      this.setState({
        style:{
          height: '40px',
          outline: 'none',
          background: '#fff',
          border: 'none',
        }
      });
    } if(this.state.style.height === '40px'){
      this.setState({
        style:{
          height: '20px',
          border: 'none',
          outline: 'none',
        }  
      });   
    }
  }
  
  handleCardEdit = (e) => {
    if(!(this.state.data === '')){
      if(e.key === 'Enter'){
        e.preventDefault();
        this.setState({
          data: e.target.value
        });
        this.writeClick();
      }
    }
  }

  handleRemove = (e) => {
    e.preventDefault();
    this.props.onRemove(this.state.data);
  }

  render() {
    const {data, style} = this.state;
    return (
      <div>
        <div className="card-compose-card">
          <form>
            <div className="card-card">
              <div>
                <input className="card-input" style={style} value={data} name="cardInput" onClick={this.writeClick} onChange={this.handleCardInput} onKeyPress={this.handleCardEdit} > 
                </input>
              </div>
              <div className="cancel-btn" onClick={this.handleRemove}>
                <img src={cancel} alt="cancel" />
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