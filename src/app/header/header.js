var header = function(){
    
    function render() {
        $.get("src/app/header/header.html", function(data){
            var markup = data;
            var tmpl = $.templates(markup);
            $("#myAppHeader").html(tmpl.render({}));
        });
    }

    function init() {
        render();
    }

    return {
        init: init
    }
}()