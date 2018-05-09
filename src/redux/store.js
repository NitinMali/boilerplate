//initial state object
var state = { checklists: [] }

//create store from initial state
var store = Redux.createStore(checkListReducer, state);

