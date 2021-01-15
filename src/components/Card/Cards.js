import React from 'react';
import '../../App.css';
import cancel from '../../img/cancel.png';

class Cards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      key: props.key,
      item: props.item,
      data: props.data,
      style:{
        border: 'none',
        height: '20px'
      }
    };
  };
  
  onChange = (e) => {
    this.setState({
      data: e.target.value
    });
    console.log(this.state.data);
    this.props.setData(e.target.value);
  }

  writeClick = () => {
    if(this.state.style.height === '20px'){
      this.setState({
        style:{
          height: '40px',
          outline: 'none',
          blur: 'none',
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
          focus: 'none'
        }  
      });   
    }
  }
  
  onEdit = (e) => {
    if(!(this.state.data == '')){
      if(e.key == 'Enter'){
        this.setState({
          data: e.target.value
        });
        this.writeClick();
      }
    }
  }

  render() {
    const {data, style} = this.state;
    return (
      <div>
        <div className="card-compose-card">
          <div className="card-card">
            <div>
              <input className="card-input" style={style} value={data} name="cardIput" onClick={this.writeClick} onChange={this.onChange} onKeyPress={this.onEdit} > 
              </input>
            </div>
            <div className="cancel-btn" ononClick={this.props.onRemove} type="submit">
              <img src={cancel} alt="cancel" />
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}

export default Cards;