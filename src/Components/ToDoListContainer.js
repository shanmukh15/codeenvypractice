import {connect} from 'react-redux';
import {toggleTodo} from '../Containers/Actions';
import {ToDoList} from './ToDoList';

const mapStatetoProps = state => {
    return {todos : state.todos};
}

const mapDispatchtoProps = dispatch => {
    return {handle : id => dispatch(toggleTodo(id))};
}

export const ToDoListContainer = connect(mapStatetoProps,mapDispatchtoProps)(ToDoList) ;
