angular.module("controllers")

.controller ("resultsCtrl",function ($scope,$localStorage) {
    // $stateParams
    // $scope.city = $stateParams.q;

    $scope.results = $localStorage.results;


    $scope.animateElementIn = function ($el) {
        $el.removeClass("not-visible ");
        $el.addClass('animated fadeInUp');

    };

    $scope.animateElementOut = function ($el) {
        $el.removeClass("animated fadeInUp");
        $el.addClass("not-visible ");
    }

})