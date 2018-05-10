//Revealing Modular Pattern
define( ["redux-store", "jquery", "js-render", "js-view"], function(redux, $){
    
    var listView = (function(){
        
        var markup, tmpl, checklists = [];

        /* Private method */
        function updateDto() {
            checklists = redux.store.getState().checklists;
            tmpl.link("#myAppList", {checklists: checklists});
        }

        function registerActionBtns() {
            $("#myApp").on("click", ".deleteBtn", function(){
                var dataItem = $.view(this).data;
                console.log(dataItem);
                redux.store.dispatch(Object.assign({}, dataItem, {type: actions.DELETE}));
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
            redux.store.subscribe(updateDto);
        }

        /* Exporting public methods : Revealing Modular Pattern passing entire public function declaration ( without () ) */
        return {
            init: init
        };

    })();

    return listView;
})