/* Module */
var app = angular.module('mp3',['ngRoute']);

/* Routes */
app.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
        templateUrl: './partials/list.html',
        controller: 'listController'
        })

        .when('/gallery', {
            templateUrl: './partials/gallery.html',
            controller: 'galleryController'
        })

        .when('/list/:imdbID/:rank', {
            templateUrl: './partials/details.html',
            controller: 'detailsController'
        })
        .otherwise({
            redirectTo: '/list'
        });
});

