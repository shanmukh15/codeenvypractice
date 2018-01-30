import React, {Component} from 'react';
import { Card, ListGroup } from 'reactstrap';
import {ToDo} from './ToDo';

export const ToDoList  = (props) => (
        <Card body inverse>
            <ListGroup>
                {props.todos.map((item,index) => 
                <ToDo key={index} {...item} handler={() => props.handler(index)} />)}
            </ListGroup>
        </Card>
);