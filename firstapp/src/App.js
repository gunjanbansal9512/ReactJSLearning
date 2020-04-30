import React from 'react';
import './App.css';
import Person from './Persons/Person';
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
switchNameHandler = (newname)=>
{
  this.setState({person: [
    { name:newname,age : 25},
    {
      name:"Harsh",age : 30
    }
   ]})

}
nameChangeHandler = (event)=>
{
  this.setState({person: [
    { name:"Gunjan",age : 25},
    {
      name: event.target.value,age : 30
    }
   ]})

}
  render()
  {
    const style = {
    
      backgroundColor: 'Yellow',
      font : 'inherit'  , 
      border : "1px solid blue",
      margin : "auto",
      padding: '16px',
      cursor : 'pointer'

    };
    return(
      <div>
        <h1>Hiii</h1>
        <button 
        style = {style}
        onClick={this.switchNameHandler.bind(this,"Gunjan Bansal")} >
          Switch Name
        </button>
        <Person 
        name={this.state.person[0].name} 
        click = {this.switchNameHandler.bind(this,"Chota Baby")}
        ></Person>
        <Person
        name={this.state.person[1].name}
        changed={this.nameChangeHandler}
        ></Person>
      </div>
    );
  }
}
export default App;