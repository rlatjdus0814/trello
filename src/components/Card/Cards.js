import React, {useState} from 'react';
import '../../App.css';
import write from '../../img/draw.png';
import Textarea from './Textarea';

class Cards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //isEdit: false,
      id: props.id,
      data: props.data,
      style:{
        border: 'none'
      },
      input: ''
    }  
  }
  onModify = (e) => {
    this.setState({
      data: e.target.value
    });
  }
  
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
    const {data, style, input, isEdit} = this.state;
    // if(isEdit){
    //   const {name} = this.state;
    //   return(

    //   );
    // }
    //const dataitem = JSON.stringify(data);
    return (
      //수정
      <div>
        <div className="card-compose-card">
          <form id="cardNum">
            <div className="card-card">
              <div style={style}>
                <input className="card-textarea" style={style} value={data} name="cardTextarea" onChange={this.onModify}></input>
              </div>
                { /* <input style={style} value={this.state.value} onChange={this.handleChange}></input> */}
            </div>
            <div className="write-btn" /*onClick={this.handleModifyMode}*/ type="submit"><img src={write} alt="menu" /></div>
          </form>
        </div>
      </div>
    ); 
  }
}

export default Cards;