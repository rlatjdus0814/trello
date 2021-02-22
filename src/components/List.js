import React from 'react';
import '../App.css';
import Cards from './Cards.js';
import cancel from '../img/cancel.png';
import cancelC from '../img/cancel-circle.png';
class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      addCardMode: false,
      id: props.list.id,
      cardId: props.cardId,
      title: props.list.title,
      cards: props.list.cards,
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

  // static getDerivedStateFromProps(props, state){
  //   if(props.lists !== state.lists || props.cardIds !== state.cardIds){
  //     return {
  //       lists: props.lists,
  //     };
  //   }
  //   return null;
  // }

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
        this.props.onLTitleEdit(e.target.value, this.state.id);
      } 
    }
  }

  setData = (content, index) => {
    // console.log(this.state.cards.content);
console.log(index);
    const temp = [].concat(content);
    console.log(temp);
    // const cardCon = this.state.cards.map((cardContent) => cardContent.content);
    // console.log(cardCon[index]);
    const cardCon = this.state.cards.map((cardContent) => (cardContent));
    const cardIdx = cardCon[index].id;
    temp[index] = content;
    console.log(temp[index]);
    console.log(cardIdx); 

    this.setState({
      cards: [
        {
          id: cardIdx,
          content: temp
         }
      ]
    })
    
    // this.setState({
    //   cards: this.state.cards.map((cardContent) => ({
    //     ...cardContent,
    //     content: temp[index]
    //   }))
    // })
    
    // const temp = [].concat(this.state.content);
    // temp[index] = content;
    // this.setState({
    //   content: temp
    // });
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
        console.log(this.state.cardId);
        this.props.onCardCnt(e.target.value, this.state.id);
        this.setState({
          // cards: [...this.state.cards,
          // {
          //   id: this.state.cardId,
          //   content: e.target.value
          // }],
          text: '',
          
        })
        // const newCardIds = [
        //   ...this.state.cardIds.concat(`${this.state.cardId}`)
        // ];
        // console.log(newCardIds);

        // this.setState({
        //   list: {
        //     ...this.state.list,
        //     cardIds: newCardIds
        //   },
        //   cardIds: newCardIds,
        //   card: this.state.card.concat({
        //         id: this.state.cardId,
        //         content: e.target.value,
        //         }),
        //   text: '',
        // })
        
        // const newCardIds = this.state.cardIds.concat(`${this.state.cardId}`);
        // // const newCardIds = [
        // //   ...this.state.cardIds, (`${this.state.cardId}`)
        // // ];
        // console.log('enter', newCardIds);
        
        
        this.createClick();
      }
    }
  }

  RemoveData = (cardItemId) => {
    const id = this.state.id;
    this.setState({
      cards: this.state.cards.filter((dataitem, item, newData) => cardItemId !== item),
    });
    this.props.onRemoveCard(cardItemId, id);
  }

  delList = () => {
    this.props.onRemove(this.state.id);
  }

  createClick = () => {
    (this.state.addCardMode) ? 
    this.setState({
      createT: { display: 'none' },
      createF: { display: 'block' },
      addCardMode: false
    }) : 
    this.setState({
      createT: { display: 'block' },
      createF: { display: 'none' },
      addCardMode : true
    });
  }

  cancelClick = () => {
    this.setState({
      addCardMode: false,
      text: ''
    });
    this.createClick();
  }

  render() {
    const {id, cards, title, style, text, createT, createF} = this.state;
    console.log(this.props);
    console.log(this.state.cards);
    //console.log(this.state.cardId);
    //console.log(this.state.cards.map((card) => (card.content)));
    return(
    <div className="list">
      <div className="content-wrap">
        <div className="content-wrap-card">
          <div className="card-top">
            <div className="card-top-title"><input value={title} style={style} onClick={this.titleClick} onChange={this.handleTitleInput} onKeyPress={this.handleTitleEdit}></input></div>
            <div className="card-delete-btn" onClick={this.delList}><img src={cancel} alt="delete" /></div>
          </div>
            <div className="cards">
              { cards.map((card, index) => 
                <Cards key={card.id} id={card.id} index={index} card={card} setData={(value) => this.setData(value, index)} onRemove={() => this.RemoveData(index, id)} />
              )}
            </div>
          <div className="card-compose-create">
            <form>
              <div className="create-false" style={createF} onClick={this.createClick} >
                <span>Add Card</span>
              </div>
              <div className="create-true" style={createT}>
                <input className="create-input" placeholder="Add another card" value={text} onKeyPress={this.handleAddCard.bind(this)} onChange={this.handleCardCreate}></input>
                <div className="create-cancelBtn" onClick={this.cancelClick}>
                  <img src={cancelC} alt="cancel" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>  
    );
  }
}

export default List;