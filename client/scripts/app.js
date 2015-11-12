var myApp = angular.module('myApp', ['ngRoute']);

// ngRoute is a package
// routeProvider is the service we're using proviced by ngRoute
myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'assets/views/routes/home.html'
        }).
        when('/code', {
            templateUrl: 'assets/views/routes/code.html'
        }).
        when('/projects', {
            templateUrl: 'assets/views/routes/projects.html'
        }).
        otherwise({
            redirectTo: 'home'
        })
}]);