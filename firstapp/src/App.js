import React from 'react';
import './App.css';
import Demo from './Demo';

class App extends React.Component
{
  
    state = {
      person: [
       { name:"Gunjan",age : 25},
       {
         name:"Harsh",age : 30
       }
      ]
    }  
switchNameHandler = ()=>
{
  this.setState({person: [
    { name:"Gunjan Bansal",age : 25},
    {
      name:"Harsh",age : 30
    }
   ]})

}
  render()
  {
    return(
      <div>
        <h1>Hiii</h1>
        <button onClick={this.switchNameHandler}>
          Switch Name
        </button>
        <Demo name={this.state.person[0].name}></Demo>
        <Demo name={this.state.person[1].name}></Demo>
      </div>
    );
  }
}
export default App;