import React, {Component} from 'react';
import { ListGroupItem, Button} from 'reactstrap';
import './Components.css';
export default class ToDo extends Component {
    
    constructor(props){
        super(props);
        this.handleclick = this.handleclick.bind(this);
    }
    
    handleclick(e) {
        
    }
    
    render() {
        
        const styleclass = this.props.item.done ? "completed" : "pending";
        return (
            <ListGroupItem onClick = {this.handleclick} className={styleclass}>this.props.item.text</ListGroupItem>
        );

    }
}