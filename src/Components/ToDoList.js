import React from 'react';
import { Card, ListGroup } from 'reactstrap';
import {ToDo} from './ToDo';

export const ToDoList  = ({todos,handle}) => (
        <Card body inverse>
            <ListGroup>
                {todos.map((item,index) => <ToDo key={index} {...item} handler={() => handle(item.id)} />)}
            </ListGroup>
        </Card>
);
