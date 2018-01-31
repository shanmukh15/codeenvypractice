import React, {Component} from 'react';
import { Form, FormGroup, Label } from 'reactstrap';
import {addTodo} from '../Containers/Actions';
import {myStore} from  '../Containers/Reducers';



export default class AddToDo extends Component {

  constructor(props){
      super(props);
      this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
      e.preventDefault();
      const data = new FormData(e.target);
      console.log(data.get("text"));
      console.log();
      myStore.dispatch(addTodo(this.input.value));
  }

  render() {
    return (
      <Form inline onSubmit ={this.handleAdd}>
        <FormGroup>
          <Label htmlFor="text2" hidden>Email</Label>
          <input ref={node => {this.input = node;}} name="text" id="text2" placeholder="Enter todo" />
        </FormGroup>
        <button className="btn btn-lg btn-success">Add</button>
      </Form>
    );
  }
}
