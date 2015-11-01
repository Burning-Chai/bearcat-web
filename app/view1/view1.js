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
    	}).then(function successCallback(response){
    		$scope.markers = [{
    			id: 111, 
    			coords: {
    				latitude: 35.123,
    				longitude: 139.12,
    			}
    		}, {
    			id: 222,
    			coords: {
    				latitude: 35.42,
    				longitude: 139.45,
    			}
    		}];
    		// $scope.wifimarkers = response
    	}, function errorCallback(response){
    		console.error("error: ", response)
    	})
    }
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
