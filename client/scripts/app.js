var myApp = angular.module("myApp", []);

myApp.controller('WelcomeController', ["$scope", function($scope){
    $scope.info = {};
    $scope.info.message = "Welcome to week 11, day 3";

    $scope.changeMessage = function(){
        $scope.scott.rank = 500;
        $scope.mark.rank = 1;
    };

    $scope.scott = {
        imgUrl: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAO8AAAAJDdlMDg0NjNiLTBiNTEtNGY2NS05MmYwLWU5YTcyYzFjMjFmNA.jpg",
        name: "Scott Bromander",
        position: "Instructor",
        location: "Bloomington",
        rank: 1
    };

    $scope.kris = {
        imgUrl: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAANLAAAAJGVmOTljZDA5LTk0NWUtNDlmOC1hNzg0LWViOWU4NjZjMTc3Ng.jpg",
        name: "Kris Szafranksi",
        position: "Instructor",
        location: "Bloomington",
        rank: 2
    };

    $scope.mark = {
        imgUrl: "https://media.licdn.com/media/p/4/000/132/251/154d1e4.jpg",
        name: "Mark Hurlburt",
        position: "President",
        location: "Minneapolis",
        rank: 500
    };

    $scope.people = [$scope.scott, $scope.kris, $scope.mark];
}]);