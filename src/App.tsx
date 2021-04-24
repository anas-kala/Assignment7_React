import React from 'react';
import logo from './logo.svg';
import './App.css';
import { interceptChange } from 'mobx/dist/internal';

interface Props{

}

interface State{

}

class App extends React.Component <Props,State>{
  constructor(props:Props){
    super(props);

    this.state={}
  }

  render(){
    return (
      <div className="App">
        <h1>Hi</h1>
      </div>
    );
  }
}

export default App;
