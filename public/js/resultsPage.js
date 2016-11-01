angular.module("controllers")

.controller ("resultsCtrl",function ($scope,$localStorage) {


    var loadResults = function () {
        $scope.results = $localStorage.results;
        console.log($localStorage.results);
    }

    loadResults();

})