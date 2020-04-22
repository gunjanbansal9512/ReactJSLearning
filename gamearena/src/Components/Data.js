import React from 'react';
import image from './image.jpg';
const Data = ({data})=>
{
   var getdata = data;
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    
    const handleChange = event => {
      setSearchTerm(event.target.value);
    };
    React.useEffect(() => {
        const results = getdata.filter(getdata =>
          getdata.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
      }, [searchTerm]);
    console.log(searchResults);
// console.log("Data",data);
      

    return(
        
        <div className="container-fluid" >
        {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark justify-content-between " style={{ backgroundImage:" linear-gradient(#0F2027,#203A43,#2C5364)"}}>
    <a className="navbar-brand" style={{color: "bisque"}}>Game Arena</a>
    <form className="form-inline">
       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
       
    </form>
 </nav>
       <div className="row" id="game-data">
       {getdata.map(record=>(
                <div className="col-sm-4" style={{backgroundColor:"#DAE0E2"}} >
                <div className="card card-body h-100" style={{width: "20rem" ,display:"inline-block" , margin:"auto "}}>
               <img className="card-img-top" src={image}/>
               <div className="card-body" >
                <h5 className="card-title" id="title">Title : {record.title}+</h5>;
              <p className="card-text">URL : {record.title}</p>
              <p className="card-text">Platform : {record.title}</p>
              <p className="card-text">Score : {record.title}</p>
              <p className="card-text">Genre : {record.title}</p>
              <p className="card-text">Editiors Choice : {record.title}</p>
              <p className="card-text">Release Year :{record.title}</p>
              </div>
              </div>
              </div>
       )
       )
       }
       </div>
       </div> 
      
               // console.log(data[i]);
                
    );


}
export default Data