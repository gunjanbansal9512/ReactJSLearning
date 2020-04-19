import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './style.css';
import 'tachyons';
function Demo(props)
{
return(
    <div className="main-class bg-dark-pink">
        <h1>{props.name}</h1>
    </div>
)
;
}
export default Demo;