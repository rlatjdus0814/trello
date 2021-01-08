import React from 'react';
import './App.css';
import Top from './components/Top.js';
import Header from './components/Header.js';
import List from './components/List.js';
class App extends React.Component {
  state={
    input: '',
    items: [{
      id: 1,
      title: 'weekend',
      data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },{
      id: 2,
      title: 'subject',
      data: ['Korean', 'Math', 'Engilsh']
    },{
      id: 3,
      title: 'genre',
      data: ['comedy', 'darama', 'horror', 'romance']
    }],
  }
  
  handleUpdate = (id, data) => {};
  render(){
    const {input, items} = this.state;
    return (
      <div className="root">
        <Top />
        <div className="container">
          <div className="wrap">
            <Header />
            <div className="content">
              {items.map((item) => <List key={item.id} title={item.title} data={item.data} onUpdate={this.handleUpdate} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
