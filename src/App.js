import React from 'react';
import './App.css';
import Top from './components/Top.js';
import Header from './components/Header.js';
import Todo from './components/List/Todo.js';
import Doing from './components/List/Doing.js';
import Done from './components/List/Done.js';
import Add from './components/List/Add.js';

class App extends React.Component {
  render(){
    return (
      <div className="root">
        <Top />
        <div className="container">
          <div className="wrap">
            <Header />
            <div className="content">
              <Todo />
              <Doing />
              <Done />
              <Add />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
