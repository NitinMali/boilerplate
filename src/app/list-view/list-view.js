//Revealing Modular Pattern

var listView = (function(){
    
    var markup, tmpl, checklists = [];

    /* Private method */
    function updateDto() {
        checklists = store.getState().checklists;
        tmpl.link("#myApp", {checklists: checklists});
    }

    function registerActionBtns() {
        $("#myApp").on("click", ".deleteBtn", function(){
            var dataItem = $.view(this).data;
            console.log(dataItem);
            store.dispatch(Object.assign({}, dataItem, {type: actions.DELETE}));
        })
    }

    function render(){
        $.get("src/app/list-view/list-view.html", function(data, textStatus, XMLHttpRequest){

            markup = data;
            /* Compile markup string as a named template */
            tmpl = $.templates(markup);
            /* Render the named template */
            //$("#myApp").html(tmpl.render({listViewTmpl: "This is from JS module template"}));

            registerActionBtns();
        });
    }

    /* Public method */
    function init(){
        render();
        store.subscribe(updateDto);
    }

    /* Exporting public methods : Revealing Modular Pattern passing entire public function declaration ( without () ) */
    return {
        init: init
    };

})();