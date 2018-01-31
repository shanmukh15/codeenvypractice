import React from 'react';
import './Components.css';
import {filter as visible} from '../Containers/Actions';


export const Filters  = ({filter,handler}) => (<div style={{display : "inline-block"}}>
     <ul className = "list-inline" >
       {visible.map((item) => (<li key={item} onClick={() => {handler(item);}} className={"list-inline-item" + filter === item ? " active" : ""}>{item}</li>))}
     </ul>
    </div>
);
