import React, { Component } from 'react';
import './App.css';
import {Header} from './Components/Header';
import {Footer} from './Components/Footer';

import AddToDo from './Components/AddToDo';
import {ToDoListContainer} from './Components/ToDoListContainer';

import { Card, CardHeader, CardBody, CardTitle, CardFooter } from 'reactstrap';
import {myStore} from './Containers/Reducers';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={myStore} >
      <Card>
        <CardHeader>
             <Header />
        </CardHeader>
        <CardBody>
            <CardTitle>Get on this List </CardTitle>
            <AddToDo />
            <ToDoListContainer />
        </CardBody>
        <CardFooter><Footer /> </CardFooter>
      </Card>
      </Provider>
    );
  }
}

export default App;
