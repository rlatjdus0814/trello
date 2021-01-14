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
    this.props.setData(e.target.value);
  }
  
  handleModify = () => {
    this.setState({
      data: this.state.data,
    });
    this.props.onModify(this.state.data);
  }
  
  // handleCheck = (index) => {
  //   const items = this.state.item;
  //   items[index].check = !items[index].check;
  //   this.setState({
  //     item: items
  //   });
  //   console.log(items);
  // }

  // handleToggle = () => {
  //   if(this.state.isEdit){
  //     this.handleModify();
  //   }
  //   this.setState({
  //     isEdit: !this.state.isEdit
  //   });
  //   console.log(this.state.isEdit);
  // }

  // handleModify = () => {
  //   , () => {
  //     data: this.props.data.concat(this.state.data);
  //   });
  // }
  
  // handleModifyMode = () => {
  //   this.setState({
  //     isEdit: (this.state.isEdit) ? false : true
  //   });
  // }
  // componentDidUpdate(prevProps, prevState){
  //   const {items, onUpdate} = this.props;
  //   if(this.state.isEdit){
  //     this.setState({
  //       data: items.data
  //     });
  //   }
  //   if(!this.state.isEdit){
  //     onUpdate(items.id, {input: this.state.data})
  //   }
  // }

  writeClick = (e) => {
    if(this.state.style.height === '20px'){
      this.setState({
        style:{
          height: '50px',
        }
      });
    }if(this.state.style.height === '40px'){
      this.setState({
        style:{
          height: '40px',
        }  
      });    
    }
  }
  //   //this.state.data = this.state.value;

  // }
  // handleModify = (index, e) => {
  //   const cards = this.state.data;
  //   if(e){
  //     this.state.data[index] = e.target.value;
  //   } 
  //   this.setState({
  //     data: cards
  //   })
  //   console.log('ok');
  // }
  // onUpdate = (e) =>{
  //   this.setState({
  //     [e.target.value]: e.target.value,
  //   });
  // }

  render() {
    const {data, style} = this.state;
    return (
      <div>
        <div className="card-compose-card">
          <form id="cardNum">
            <div className="card-card">
              <div>
                <input className="card-input" style={style} value={data} name="cardIput" onClick={this.writeClick} onChange={this.onChange}> 
                </input>
              </div>
              <button className="cancel-btn" onClick={this.handleModify} type="submit">
                <img src={cancel} alt="cancel" />
              </button>
              <div >
                
              </div>
            </div>
          </form>
        </div>
      </div>
    ); 
  }
}

export default Cards;