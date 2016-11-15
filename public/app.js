var app = angular.module("app",["ui.router",'ngStorage',"controllers"]);

app.config(function ($stateProvider) {
    $stateProvider
        .state("searchPage",{
            url: "/search",
            templateUrl:"/views/searchPage.html",
            controller : "searchCtrl"
        })
        .state("resultsPage",{
            url: "/results/:q",
            templateUrl:"views/resultsPage.html",
            controller : "resultsCtrl"
        })
    });
