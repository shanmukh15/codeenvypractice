
const gen = function* generator() {
  let counter=0;
  while(1) yield ++counter;
}

const counter = gen();

export const filter = ["All", "Completed", "Pending"];

export const actionTypes = {
                             ADD_TODO : "ADD_TODO", 
                             DEL_TODO : "DELETE_TODO",
                             TOGGLE_TODO : "TOGGLE_TODO",
                             CHANGE_FILTER : "CHANGE_FILTER",
                            };

export function addTodo(text) {
    return {type : actionTypes.ADD_TODO, text : text, current_id : counter.next()};    
}

export function deleteTodo(id) {
    return {type : actionTypes.DEL_TODO, id : id};    
}

export function changeVisibility(filter) {
    return {type : actionTypes.CHANGE_FILTER, filter : filter};
}

export function toggleTodo(id) {
    return {type : actionTypes.TOGGLE_TODO, id : id};    
}
