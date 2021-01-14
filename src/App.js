import React from 'react';
import './App.css';
import Top from './components/Top.js';
import Header from './components/Header.js';
import List from './components/List.js';
class App extends React.Component {
  state={
    items: [{
      id: 0,
      title: 'weekend',
      data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },{
      id: 1,
      title: 'subject',
      data: ['Korean', 'Math', 'Engilsh']
    },{
      id: 2,
      title: 'genre',
      data: ['comedy', 'darama', 'horror', 'romance']
    }],
  }
  

  handleModify = (data) => {
    // this.setState({
    //   data: this.props.data
    // });
    this.state.items.map((item)=> {
      if(item === data){
        this.data.map((datas, index) => {
          //console.log(datas[index]);
          //console.log('ok');
        });
      }
    });
    

    // console.log(this.data.indexof(data));
    // const {newitem} = this.state;
    // this.setState({
    //   data: data.concat({newitem, ...data})
    // });
    // console.log(data);
  }

  handleRemove = () => {
    console.log('ok');
  }

  render(){
    const {items} = this.state;
    return (
      <div className="root">
        <Top />
        <div className="container">
          <div className="wrap">
            <Header />
            <div className="content">
              {items.map((item) => <List key={item.id} item={item} title={item.title} data={item.data} onModify={this.handleModify} onRemove={this.handleRemove} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
