var addNew = function(){
    
    var markup, tmpl, checklists = [];
    
    var formData = { title: '', desc: '', priority: '' }

    function updateDto(){
        checklists = store.getState().checklists;
    }

    function render(){
        $.get("src/app/add-new/add-new.html", function(data){
            markup = data;
            tmpl = $.templates(markup);
            //$("#myAppAddNew").html(tmpl.render({})); 
            tmpl.link("#myAppAddNew", formData);

            addNewItem()
        })
    }

    function addNewItem(){
        $("#addBtn").on("click", function() {
            store.dispatch(Object.assign({}, formData, {type: actions.ADD}));
        })
    }

    function init(){
        store.subscribe(updateDto)
        render();
    }

    return {
        init: init
    }
}()