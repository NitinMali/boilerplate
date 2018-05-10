requirejs.config({
    appDir: ".",
    //baseUrl: "js",
    paths: { 
        /* Load jquery from google cdn. On fail, load local file. */
        'jquery': ['//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min', 'libs/jquery-min'],
        'js-render' : ['//cdnjs.cloudflare.com/ajax/libs/jsrender/0.9.88/jsrender'],
        'js-view' : ['//cdnjs.cloudflare.com/ajax/libs/jsviews/0.9.90/jsviews.min'],
        'underscore': ['//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.0/underscore-min'],
        'page-js': ['//unpkg.com/page/page'],
        'redux' : '/src/lib/redux.min',
        'redux-actions': '/src/redux/actions',
        'reducer': '/src/redux/reducer',
        'redux-store' : '/src/redux/store',
        'header': 'header/header',
        'app-add-new': 'add-new/add-new',
        'app-list-view' : 'list-view/list-view'
    },
    shim: {
        /* Set bootstrap dependencies (just jQuery) */
        'js-render' : ['jquery'],
        'js-view' : ['jquery'],
        'page-js' : ['jquery'],
        'app-list-view' : {
            exports: 'listView'
        }
    }
});


require(['jquery', 'page-js', 'header', 'app-add-new', 'app-list-view'], function($, page, header, addNew, listView) {
    $(document).ready(function () {
        //header module init
        header.init();

        //clear or rest main body 
        function resetView() {
            var promiseObj = $.Deferred(function(pageObj){
                $("#myApp").empty();
                pageObj.resolve();
            });
            
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
});