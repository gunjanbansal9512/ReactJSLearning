import React, { Component } from 'react';
import './App.css';
import Filters from './Components/Filters';
import Data from './Components/Data';
import Footer from './Components/Footer';
import $ from 'jquery';
class App extends Component {
 
 
  render(){
    return (
      <div className="container-fluid">
      {/* Navbar */}
     <nav className="navbar navbar-dark bg-dark justify-content-between " style={{ backgroundImage:" linear-gradient(#0F2027,#203A43,#2C5364)"}}>
      <a className="navbar-brand" style={{color: "bisque"}}>Game Arena</a>
      <form className="form-inline">
         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  />
         <button type="button" class="btn btn-light">Search</button>
      </form>
   </nav>
        {/*Filters  */}
        <Filters/>
       <Data data={this.state.data}></Data>
        <Footer/>
            </div>
    );
  }
 
  state={
    data : [],
    search:null
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
