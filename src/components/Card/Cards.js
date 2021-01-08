import React from 'react';
import '../../App.css';
import write from '../../img/draw.png';

class Cards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEdit: false,
      id: props.id,
      data: props.data,
      style:{
        border: 'none'
      }
    };

  }
  onChange = (e) => {
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
      //수정
      <div>
        <div className="card-compose-card">
          <form id="cardNum">
            <div className="card-card">
              <div style={style}>
                <input className="card-textarea" style={style} value={data} name="cardTextarea" onChange={this.onChange}></input>
              </div>
            </div>
            <div className="write-btn" onClick={this.handleModify} type="submit"><img src={write} alt="menu" />
            </div>
          </form>
        </div>
      </div>
    ); 
  }
}

export default Cards;