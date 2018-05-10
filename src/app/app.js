$(document).ready(function () {
    //header module init
    header.init();

    //clear or rest main body 
    function resetView() {
        var promiseObj = $.Deferred();
        $("#myApp").empty();
        promiseObj.resolve();
        return promiseObj.promise();
    }

    page('/', function(){
        $.when( resetView() ).then(function(){
            listView.init();
        });
    });
    
    page('/new', function(){
        $.when( resetView() ).then(function(){
            addNew.init();
        });
    });

    page('/list', function(){
        $.when( resetView() ).then(function(){
            listView.init();
        });
    });

    page();
});