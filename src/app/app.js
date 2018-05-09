$(document).ready(function () {
    header.init();

    //page.base('/app');
    page('/', function(){
        listView.init();
    });
    
    page('/new', function(){
        addNew.init();
    });

    page();
});