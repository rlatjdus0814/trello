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
        border: 'none'
      }
    };
  };
  
  onChange = (e) => {
    this.props.setData(e.target.value);
    this.setState({
      data: e.target.value
    });
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

  // writeClick = () => {
  //   // if(this.state.style.display === 'none'){
  //   //   this.setState({
  //   //     style:{
  //   //       display: 'block',
  //   //     }    

  //   //   });
  //   //   //this.state.style.display = 'block';      
  //   // }if(this.state.style.display === 'block'){
  //   //   this.setState({
  //   //     display: 'none',
  //   //   });
  //   //   //this.state.style.display = 'none';      
  //   // }
  //   // this.setState({
  //   //   data: this.state.data.concat(newData)
  //   // });
   
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
                <input className="card-input" style={style} value={data} name="cardIput" onChange={this.onChange}> 
                </input>
              </div>
              <button className="cancel-btn" onClick={this.handleModify} type="submit">
                <img src={cancel} alt="cancel" />
              </button>
            </div>
          </form>
        </div>
      </div>
    ); 
  }
}

export default Cards;