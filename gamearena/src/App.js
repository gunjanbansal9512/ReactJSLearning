import React, { Component } from 'react';
import './App.css';
import Filters from './Components/Filters';
import Data from './Components/Data';
import Footer from './Components/Footer';
class App extends Component {
 
 
  render(){
    return (
      <div className="container-fluid">
      
        {/*Filters  */}
        <Filters/>
       <Data data={this.state.data}></Data>
        <Footer/>
            </div>
    );
  }
 
  state={
    data : [],
  search :""
  };

componentDidMount() {
  fetch("http://starlord.hackerearth.com/gamesext")
  .then(res => res.json())
  .then((data) => {
    this.setState({ data: data })
    // console.log(this.state.data);
  })
  .catch(console.log)
}

}


export default App;
