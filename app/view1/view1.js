'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$scope', '$http', 'uiGmapGoogleMapApi', function($scope, $http, uiGmapGoogleMapApi) {
    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8,
        events: {
        	click: function(maps, eventName, args) {
        		console.log(maps, eventName, args)
        	},
        	mouseover: function(maps, eventName, args) {
        		console.log(maps, eventName, args)
        	},
        }
    };

    $scope.wifimarkers = getWifies();



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


    function getWifies() {

        return [{
            id: 0,
            coords: {
                latitude: 45,
                longitude: -73
            }
        }, {
            id: 1,
            coords: {
                latitude: 45.7,
                longitude: -73.2
            }
        }, {
            id: 2,
            coords: {
                latitude: 45.1,
                longitude: -73.9
            }
        }]
    }

}]);
