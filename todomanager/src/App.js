import React, { Component } from 'react';
import './App.css';
import {Header} from './Components/Header';
import Footer from './Components/Footer';

import AddToDo from './Components/AddToDo';
import {ToDoList} from './Components/ToDoList';

import { Card, CardHeader, CardBody, CardTitle, CardFooter } from 'reactstrap';
  

class App extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
             <Header />
        </CardHeader>
        <CardBody>
            <CardTitle>Get on this List </CardTitle>
            <AddToDo />
            <ToDoList />
        </CardBody>
        <CardFooter><Footer /> </CardFooter>
      </Card>
    );
  }
}

export default App;
