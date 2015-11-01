'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$scope', '$http', 'uiGmapGoogleMapApi', function($scope, $http, uiGmapGoogleMapApi) {
    var baseURL = "http://52.68.184.153:4984/";


    $scope.storedPlace = {

        },

        $scope.map = {
            center: {
                latitude: 35,
                longitude: 139
            },
            zoom: 8,
        };
    // $scope.pushDoc = pushDoc;

    $scope.getFavoritePlaces = getFavoritePlaces;
    $scope.getHotel = getHotel;
    $scope.getAttraction = getAttraction;
    $scope.getEmergency = getEmergency;
    $scope.wifimarkers = [];
    $scope.datas = [];
    $scope.addData = function(data) {
        console.log("dasfadf");
        console.log(data);

    }
    uiGmapGoogleMapApi.then(function(maps) {
        maps.events = {
            click: function(maps, eventName, args) {
                console.log(maps, eventName, args)
            },
            mouseover: function(maps, eventName, args) {
                console.log(maps, eventName, args)
            },
        }
    });

    function getEmergency() {
        console.log("getEmergency");
        $http({
            method: "GET",
            url: baseURL + "bearcat/_all_docs"
        }).then(function successCallback(response) {
            $scope.markers = [{
                id: 111,
                name: "aaaa",
                coords: {
                    latitude: 35.123,
                    longitude: 139.12,
                },
                options: {
                    icon: {
                        url: "images/emergency_icon.png",
                        scaledSize: new google.maps.Size(24, 24)
                    }

                },
                events: {
                    click: function(map, eventName, args) {
                        console.log(args);
                        $scope.datas.push(this)
                    }
                }
            }, {
                id: 222,
                name: "vvv",
                coords: {
                    latitude: 35.42,
                    longitude: 139.45,
                },
                options: {
                    icon: {
                        url: "images/emergency_icon.png",
                        scaledSize: new google.maps.Size(24, 24)
                    }
                },
                events: {
                    click: function(map, eventName, args) {
                        console.log(dbclick);
                    }
                }
            }];
            // $scope.wifimarkers = response
        }, function errorCallback(response) {
            console.error("error: ", response)
        })
    }

    function getAttraction() {
        console.log("getAttraction");
        $http({
            method: "GET",
            url: baseURL + "bearcat/_all_docs"
        }).then(function successCallback(response) {
            $scope.markers = [{
                id: 111,
                name: "べとなむちゃん",
                coords: {
                    latitude: 35.123,
                    longitude: 139.12,
                },
                options: {
                    icon: {
                        url: "images/attraction.png",
                        scaledSize: new google.maps.Size(24, 24)
                    }

                }

            }, {
                id: 222,
                name: "東京大学",
                coords: {
                    latitude: 35.42,
                    longitude: 139.45,
                },
                options: {
                    icon: {
                        url: "images/attraction.png",
                        scaledSize: new google.maps.Size(24, 24)
                    }
                }
            }];
            // $scope.wifimarkers = response
        }, function errorCallback(response) {
            console.error("error: ", response)
        })
    }

    function getHotel() {
        console.log("getHotel");
        $http({
            method: "GET",
            url: baseURL + "bearcat/_all_docs"
        }).then(function successCallback(response) {
            $scope.markers = [{
                id: 111,
                name: "べとなむちゃん",
                coords: {
                    latitude: 35.123,
                    longitude: 139.12,
                },
                options: {
                    icon: {
                        url: "images/hotel_icon.png",
                        scaledSize: new google.maps.Size(24, 24)
                    }

                }

            }, {
                id: 222,
                name: "東京大学",
                coords: {
                    latitude: 35.42,
                    longitude: 139.45,
                },
                options: {
                    icon: {
                        url: "images/hotel_icon.png",
                        scaledSize: new google.maps.Size(24, 24)
                    }
                }
            }];
            // $scope.wifimarkers = response
        }, function errorCallback(response) {
            console.error("error: ", response)
        })
    }

    function getFavoritePlaces() {
        console.log("getFavoritePlaces");
        $http({
            method: "GET",
            url: baseURL + "bearcat/_all_docs"
        }).then(function successCallback(response) {
            $scope.markers = [{
                id: 111,
                name: "べとなむちゃん",
                coords: {
                    latitude: 35.123,
                    longitude: 139.12,
                },
                options: {
                    icon: {
                        url: "images/restaurant_icon.png",
                        scaledSize: new google.maps.Size(24, 24)
                    }

                }

            }, {
                id: 222,
                name: "東京大学",
                coords: {
                    latitude: 35.42,
                    longitude: 139.45,
                },
                options: {
                    icon: {
                        url: "images/restaurant_icon.png",
                        scaledSize: new google.maps.Size(24, 24)
                    }
                }
            }];
            // $scope.wifimarkers = response
        }, function errorCallback(response) {
            console.error("error: ", response)
        })
    }

    // function pushDoc(docs) {
    // 	// generate_id(docs)
    //     $http.post(baseURL + "bearcat/", doc, {})
    //         .then(function successCallback(response) {
    //             console.info(response);
    //         }, function errorCallback(response) {
    //             console.error(response);
    //         })
    // }

}]);
