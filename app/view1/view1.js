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

    $scope.wifimarkers = [];

    getFavoritePlaces();

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

    function getFavoritePlaces() {
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
                        url: "images/restaurent.png",
                        scaledSize: new google.maps.Size(34, 44)
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
                        url: "images/restaurent.png",
                        scaledSize: new google.maps.Size(34, 44)
                    }
                }
            }];
            // $scope.wifimarkers = response
        }, function errorCallback(response) {
            console.error("error: ", response)
        })
    }

    function getWifies() {
        $http({
            method: "GET",
            url: baseURL + "bearcat/_all_docs"
        }).then(function successCallback(response) {
            // $scope.wifimarkers = response
        }, function errorCallback(response) {
            console.error("error: ", response)
        })
    }

}]);
