import React, {Component} from 'react';
import './Components.css';
import {filter} from '../Containers/Actions';

export default class Filters extends Component {
    
    constructor(props){
        super(props);
        this.state = { filter : "All"};
        this.handlefilterchange = this.handlefilterchange.bind(this);
    }
    
    
    handlefilterchange(e) {
        console.log(e.currentTarget.dataset.id);
        
    }
    
    ComponentWillReceiveProps(nextProps){
        return nextProps.filter !== this.state.filter;
    }
    
    
    render() {
        let filterset = filter.map(
        (item)=><li key = {item} onClick = {this.handlefilterchange} data-id={item} className={"list-inline-item" + this.state.filter === item ? " active" : ""}>{item}</li>);
        return (
            <div style={{display : "inline-block"}}>
             <ul className = "list-inline" >     {filterset}    </ul>
            </div>
        );
    }
    
}

