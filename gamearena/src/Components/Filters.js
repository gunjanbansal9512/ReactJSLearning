import React from 'react';
function Filters()
{

    return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <ul className="navbar-nav">
           <li className="nav-item active " >
              <a className="nav-link disabled" href="#">Sort By</a>
           </li>
           <li className="nav-item active grow">
              <a className="nav-link" href="#">Title</a>
           </li>
           <li className="nav-item active grow">
              <a className="nav-link" href="#">URL</a>
           </li>
           <li className="nav-item active grow" >
              <a className="nav-link" href="#">Platform</a>
           </li>
           <li className="nav-item active grow" >
              <a className="nav-link " href="#">Score Low to High</a>
           </li>  
           <li className="nav-item active grow" >
              <a class="nav-link " href="#">Score High to Low</a>
           </li>
           <li class="nav-item active grow" >
              <a class="nav-link " href="#">Genre</a>
           </li>
           <li class="nav-item active grow" >
              <a class="nav-link " href="#">Editiors Choice</a>
           </li>
           <li class="nav-item active grow" >
              <a class="nav-link " href="#">Release Year</a>
           </li>
        </ul>
     </nav>
    );
}
export default Filters;