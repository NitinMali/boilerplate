function checkListReducer(currentState, action) {
    var newState = Object.assign({}, currentState);

    switch(action.type) {
        case actions.ADD: 
            action.id = newState.checklists.length+1;
            delete action.type;
            newState.checklists.push(action);
            return newState;
        
        case actions.DELETE:
            newState.checklists = _.without(newState.checklists, _.findWhere( newState.checklists, {id:action.id} ));
            return newState;
        default:
            return newState; 
    }
}