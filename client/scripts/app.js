var myApp = angular.module('myApp', ['ngRoute']);

// ngRoute is a package
// routeProvider is the service we're using provided by ngRoute
myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'assets/views/routes/home.html',
            controller: 'SomeController'
        }).
        when('/code', {
            templateUrl: 'assets/views/routes/code.html',
            controller: 'SomeController'
        }).
        when('/projects', {
            templateUrl: 'assets/views/routes/projects.html',
            controller: 'AnotherController'
        }).
        otherwise({
            redirectTo: 'home'
        })
}]);
