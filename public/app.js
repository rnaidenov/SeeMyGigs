var app = angular.module("myApp", []);

app.service("EventsService", ["$http", function ($http) {

    this.searchByCity = function (city) {
        return $http.get("http://api.gigatools.com/city.json?cities[]=" + city + "&api_key=d924857077bc386767")
            .then(function (response) {
                return response.data[1];
            })
    }


    this.searchByArtist = function (artist) {
        return $http.get("http://api.gigatools.com//gigs.json?users[]=" + artist + "&api_key=d924857077bc386767")
            .then(function (response) {
                var allEvents =  response.data[1];
                var filteredEvents = [];
                allEvents.forEach(function (singleEvent) {
                    if (singleEvent.event_owner === artist) {
                        filteredEvents.push(singleEvent);
                    }
                })
                return filteredEvents;
            })
    }

    this.searchByVenue = function (venue) {
        return $http.get("http://api.gigatools.com/venue.json?venues[]=" + venue + "&api_key=d924857077bc386767")
            .then(function (response) {
                return response.data[1];
            })
    }

}])

app.controller("myCtrl",function ($scope,EventsService) {

    $scope.searchOptions = [
        {
            id: "city",
            imgUrl: "resources/cityIcon.png",
            imgUnclicked: "resources/cityIcon.png",
            imgClicked: "resources/cityIconClicked.png",
            tooltip: "Click to search by city",
            isClicked: false
        },
        {
            id: "artist",
            imgUrl: "resources/artistIcon.png",
            imgUnclicked: "resources/artistIcon.png",
            imgClicked: "resources/artistIconClicked.png",
            tooltip: "Click to search by artist",
            isClicked: false
        },
        {
            id: "venue",
            imgUrl: "resources/venueIcon.png",
            tooltip: "Click to search by venue",
            isClicked: false
        }
    ]


    $scope.searchBy = "Select option to search by";
    $scope.selected = null;
    $scope.dropdown_image = "resources/dropdown_menu.png";


    //If there is any user input indicate that
    // program is ready to perform a search
    $scope.newInput = function () {
        if ($scope.searchInput !== "") {
            $scope.dropdown_image = "resources/searchIcon.png";
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

    //Search function that uses the EventsService for getting data from API
    $scope.search = function (input) {


        switch ($scope.selected.id) {
            case "city" :
                console.log("Have to search by city.");
                EventsService.searchByCity(input)
                    .then(function (events) {
                        events.forEach(function (singleEvent) {
                            console.log(singleEvent);
                        })
                    })
                break;

            case "artist" :
                console.log("Have to search by artist.");
                EventsService.searchByArtist(input)
                    .then(function (events) {
                        events.forEach(function (singleEvent) {
                            console.log(singleEvent);
                        })
                    })
                break;

            case "venue" :

                console.log("Have to search by venue.");
                EventsService.searchByVenue(input)
                    .then(function (events) {
                        events.forEach(function (singleEvent) {
                            console.log(singleEvent);
                            if (singleEvent.event_owner === "Ben Klock") {
                                console.log("JACKPOT!");
                            }
                        })
                    })
                break;

        }

    }


    //Updates the option that is selected
    $scope.selectOption = function (option) {
        $scope.searchBy = "Search by " + option.id;
        if ($scope.selected === null) {
            $scope.selected = option;
            option.isClicked = true;
        }
        else {
            var previousSelected;
            previousSelected = $scope.selected;
            $scope.selected = option;
            previousSelected.isClicked = false;
            option.isClicked = true;
        }
    }
})


app.directive("welcome", function () {
    return {
        restrict: "E",
        templateUrl: "views/welcome.html",
        controller: "myCtrl"
    }
})
