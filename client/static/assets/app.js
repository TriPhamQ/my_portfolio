// Setup app
var myApp = angular.module('app', ['ngRoute', 'ngCookies']);

// Assigning url and controllers
myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/homepage.html',
        controller: ''
    })
    .otherwise({
        redirectTo: '/'
    });
});
