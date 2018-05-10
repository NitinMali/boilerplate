define( ["redux", "reducer"], function(Redux, reducer){
    return {
        //initial state object
        'state' : { checklists: [] },
        //create store from initial state
        'store' : Redux.createStore(reducer.checkListReducer, this.state)
    }
});

