var app = angular.module('app', ['ngRoute']);
app.config(function ($locationProvider, $routeProvider) {
    
    
    $routeProvider.when('/', {
        templateUrl: 'www/views/home.html',
        controller: 'homeCtrl'
    })
    
    .when('/dashboard', {
        templateUrl: 'www/views/dashboard.html',
        controller: 'dashboardCtrl'
    })
    
    .when('/posts', {
        templateUrl: 'www/views/posts.html',
        controller: 'postCtrl'
    })
    
    .otherwise({
        redirectTo: '/'
    });
});