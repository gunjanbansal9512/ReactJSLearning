import React,{Component} from 'react';
import ReactDom from 'react-dom';
import 'tachyons';
import './Person.css';
function Person(props)
{
return(
    <div className="Person">
        <h1 onClick={props.click}>{props.name}</h1>
        <input type="text" onChange={props.changed} value = {props.name}/>
    </div>
)
;
}
export default Person;