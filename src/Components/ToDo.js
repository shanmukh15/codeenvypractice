import React from 'react';
import { ListGroupItem} from 'reactstrap';
import './Components.css';


export const ToDo = (props) => <ListGroupItem onClick={props.handler} className={props.done ? "completed" : "pending"}>item.text</ListGroupItem> ;