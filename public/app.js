var app = angular.module ("myApp",[]);

app.directive ("welcome",function () {
    return {
        restrict : "E",
        templateUrl : "views/welcome.html",
        controller : function ($scope) {

            $scope.searchOptions = [
                {
                    id : "city",
                    imgUrl : "resources/cityIcon.png",
                    imgUnclicked : "resources/cityIcon.png",
                    imgClicked : "resources/cityIconClicked.png",
                    tooltip : "Click to search by city",
                    isClicked : false
                },
                {
                    id : "artist",
                    imgUrl : "resources/artistIcon.png",
                    imgUnclicked : "resources/artistIcon.png",
                    imgClicked : "resources/artistIconClicked.png",
                    tooltip : "Click to search by artist",
                    isClicked : false
                },
                {
                    id : "venue",
                    imgUrl : "resources/venueIcon.png",
                    tooltip : "Click to search by venue",
                    isClicked : false
                }
            ]


            $scope.searchBy = "Select option to search by";
            $scope.selected = null;
            $scope.dropdown_image =  "resources/dropdown_menu.png";


            //If there is any user input indicate that
            // program is ready to perform a search
            $scope.newInput = function () {
                if ($scope.searchInput !== "") {
                    $scope.dropdown_image =  "resources/searchIcon.png";
                    return true;
                }
                else {
                    $scope.dropdown_image = "resources/dropdown_menu.png";
                    return false;
                }

            }

            //Check if there is a search filter selected
            $scope.optionSelected = function () {
                if ($scope.selected !== null) {
                    return true;
                }
                else {
                    return false;
                }
            }

            //Toggle the image when selected
            $scope.getImage = function (option) {
                if (option.isClicked) {
                    option.imgUrl = "resources/" + option.id + "IconClicked.png";
                }
                else {
                    option.imgUrl = "resources/" + option.id + "Icon.png";
                }
                return option.imgUrl;
            }


            $scope.getResults = function () {
                console.log("Code for getting results is here.");
            }


            //Updates the option that is selected
            $scope.selectOption = function (option) {
                $scope.searchBy = "Search by " + option.id;
                if ($scope.selected === null) {
                    $scope.selected = option;
                    option.isClicked = true;
                }
                else  {
                    var previousSelected;
                    previousSelected = $scope.selected;
                    $scope.selected = option;
                    previousSelected.isClicked = false;
                    option.isClicked = true;
                }
            }
        }
    };
})
