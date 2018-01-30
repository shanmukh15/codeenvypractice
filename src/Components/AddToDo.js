import React, {Component} from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class AddToDo extends Component {
  
  constructor(props){
      super(props);
      this.handleAdd = this.handleAdd.bind(this);
  }
  
  handleAdd(e) {
      e.preventDefault();
      const data = new FormData(e.target);
      data.set("done", false);
      data.set("id", 5);      
  } 
  
  render() {
    return (
      <Form inline onSubmit ={this.handleAdd}>
        <FormGroup>
          <Label htmlFor="text2" hidden>Email</Label>
          <Input type="text" name="text" id="text2" placeholder="Enter todo" />
        </FormGroup>
        <button className="btn btn-lg btn-success">Add</button>
      </Form>
    );
  }
}

