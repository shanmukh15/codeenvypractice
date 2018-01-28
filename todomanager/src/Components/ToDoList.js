import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText,ListGroup } from 'reactstrap';
import ToDo from './ToDo';

export default class ToDoList extends Component {
    
    constructor(props){
        super(props);
        this.state = {todos : [{id : 1, done : true, text : "learn redux-react"},{id : 1, done : false, text : "learn reactstrap"},
                                {id : 3, done : false, text : "learn react"}]};
    }
    
    render() {
        const todoset = this.state.todos.map((item) => <ToDo item={item} />);
        
        return (
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <ListGroup>
                {todoset}
            </ListGroup>
        </Card>
    );

    }
}

