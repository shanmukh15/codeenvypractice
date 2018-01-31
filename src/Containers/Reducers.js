import {combineReducers} from 'redux';
import {actionTypes} from './Actions';

import {createStore} from 'redux';

function manageToDo(state = [], action) {
    switch(action.type) {
        case actionTypes.ADD_TODO :
                return [...state, {text : action.text, done : false, id : action.id}];

        case actionTypes.DELETE_TODO :
                return state.filter((todo) => todo.id !== action.id);

        case actionTypes.TOGGLE_TODO :
                return state.map((todo) => {
                    if(todo.id === action.id){
                        return Object.assign({}, todo, {done : !todo.done});
                    }
                    return todo;
                });

        default :
                return state;
    }
}

function manageFilter(state = "All",action) {
    switch(action.type) {
        case actionTypes.CHANGE_FILTER :
            console.log(action.filter);
                return action.filter;

        default : return state;
    }

}

export const myReducer = combineReducers({todos : manageToDo, currentFilter : manageFilter});

export const myStore = createStore(myReducer);
