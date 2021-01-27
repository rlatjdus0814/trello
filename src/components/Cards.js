import React from 'react';
//import { Draggable } from 'react-beautiful-dnd';
import '../App.css';
import cancel from '../img/cancel.png';
import edit from '../img/draw.png';

class Cards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cnt: 1,
      editMode: false,
      items: props.items,
      id: props.id,
      index: props.index,
      item: props.item,
      data: props.data,
      cardId: props.cardId,
      cardText: props.cardText,
      style:{
        border: 'none',
        height: '20px'
      },
      styleBG:{
        background: '#ffffff'
      },
      color: ['#ffffff', '#fddfe3', '#fcfbed', ' #dcf5eb', '#e5edf8', '#eee5f8']
    };
  };

  
  
  handleCardInput = (e) => {
    
    this.setState({
      cardText: e.target.value
      //cardText: cardText.concat({})
    //data: data.map((dataitem) => cardId === dataitem.id ? {cardText: e.target.value } : dataitem )
     //data: this.state.data.map((dataitem) => id === dataitem.id ? {...dataitem, cardText: e.target.value } : dataitem)
    });

    //this.props.setData(this.state.data);
  }

  handleEdit = () => {
    const {editMode} = this.state;
    this.setState({
      editMode: !editMode
    });
  }
  
  handleCardEdit = (e) => {
    if(!(this.state.cardText === '')){
      if(e.key === 'Enter'){
        e.preventDefault();
        this.setState({
          careText : e.target.value
        });
        this.handleEdit();
      }
    }
  }

  handleRemove = (e) => {
    e.preventDefault();
    this.props.onRemove(this.state.data.id);
    
    this.setState({
      styleBG: {
        background: '#ffffff'
      }
    });
    
  }

  cardColorChange = () => {
    const {color, cnt} = this.state;
    if(this.state.editMode === false){
      this.setState({
        styleBG: {
          background: color[cnt]
        },
        cnt: cnt + 1
      });
      if(cnt >= 5){
        this.setState({
          cnt: 0
        })
      }
    }
  }
  static getDerivedStateFromProps(props, state){
    if(props.cardText !== state.cardText){
      return {
        cardText: props.cardText
      };
    }
    return null;
  }
  render() {
    const {styleBG, styleItem, editMode, cardText} = this.state;
    //console.log(this.state.data.id);
    // console.log(this.state.cardText);
    //console.log(this.state.cardText);
    
    return (
          <div>
            <div className="card-color">
              <div className="card-compose-card" style={styleBG}>
                <form>
                  <div className="card-card">
                    <div className="card-item" style={styleItem}  onClick={this.cardColorChange}>
                      {
                        editMode ? 
                        <input className="card-input" value={cardText} name="cardText" onChange={this.handleCardInput} onKeyPress={this.handleCardEdit} ></input>
                        : <p>{cardText}</p>
                      }
                    </div>
                    <div className="card-btn">
                      <div className="edit-btn" onClick={this.handleEdit}>
                        <img src={edit} alt="edit" />
                      </div>
                      <div className="cancel-btn" onClick={this.handleRemove}>
                        <img src={cancel} alt="cancel" />
                      </div>
                    </div>
                    {/* <div className="cancel-btn">
                      <input className="submitBtn" type="submit" value='' onClick={this.props.onRemove} return false></input>
                    </div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
    


      // <Draggable key={id} draggableId={String(id)} index={id}>
      //   {
      //     provided => (
      //       <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
      //         <div className="card-color">
      //         <div className="card-compose-card" style={styleBG}>
      //           <form>
      //             <div className="card-card">
      //               <div className="card-item" style={styleItem}  onClick={this.cardColorChange}>
      //                 {
      //                   editMode ? <p>{data}</p> : 
      //                   <input className="card-input" value={data} name="cardInput" onChange={this.handleCardInput} onKeyPress={this.handleCardEdit} ></input>
      //                 }
      //               </div>
      //               <div className="card-btn">
      //                 <div className="edit-btn" onClick={this.handleEdit}>
      //                   <img src={edit} alt="edit" />
      //                 </div>
      //                 <div className="cancel-btn" onClick={this.handleRemove}>
      //                   <img src={cancel} alt="cancel" />
      //                 </div>
      //               </div>
      //               {/* <div className="cancel-btn">
      //                 <input className="submitBtn" type="submit" value='' onClick={this.props.onRemove} return false></input>
      //               </div> */}
      //             </div>
      //           </form>
      //         </div>
      //       </div>
      //       </div>
      //     )
      //   }
        
      //</Draggable>
      
    
  
  }

export default Cards;


