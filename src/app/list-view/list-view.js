//Revealing Modular Pattern

var listView = (function(){
    
    /* Private method */
    function renderView(){
        $.get("src/app/list-view/list-view.html", function(data, textStatus, XMLHttpRequest){
            var markup = data;
        
            /* Compile markup string as a named template */
            var tmpl = $.templates(markup );
        
            /* Render the named template */
            $("#myApp").html(tmpl.render({listViewTmpl: "This is from JS module template"}));
        });
    }

    /* Public method */
    function init(){
        renderView()
    }

    /* Exporting public methods : Revealing Modular Pattern passing entire public function declaration ( without () ) */
    return {
        init: init
    };

})();