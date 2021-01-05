import React from 'react';
import './App.css';
import Top from './components/Top.js';
import Header from './components/Header.js';
import List from './components/List.js';
class App extends React.Component {
  render(){
    const items = [{
      title: 'weekend',
      data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },{
      title: 'subject',
      data: ['Korean', 'Math', 'Engilsh']
    },{
      title: 'genre',
      data: ['comedy', 'darama', 'horror', 'romance']
    }]
    return (
      <div className="root">
        <Top />
        <div className="container">
          <div className="wrap">
            <Header />
            <div className="content">
              {items.map((item) => <List title={item.title} data={item.data} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
