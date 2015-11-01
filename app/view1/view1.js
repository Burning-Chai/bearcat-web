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
                latitude: 35.71628,
                longitude: 139.76207
            },
            zoom: 9,
        };
    // $scope.pushDoc = pushDoc;

    $scope.Restaurant = Restaurant;
    $scope.getHotel = getHotel;
    $scope.getAttraction = getAttraction;
    $scope.getEmergency = getEmergency;
    $scope.wifimarkers = [];
    $scope.datas = [];
    $scope.selected = false;
    $scope.namesavelist = "";

    $scope.save = function() {
        console.log("save");
        var doc = {}
        doc._id = $scope.namesavelist;
        doc.docs = $scope.datas;

        $http.post(baseURL + "bearcat/", doc, {})
            .then(function successCallback(response) {
                console.info(response);
            }, function errorCallback(response) {
                console.error(response);
            })
    }
    $scope.addData = function() {
        console.log("dasfadf");
        $scope.datas.push($scope.selected)
        $scope.selected = false
        console.log($scope.datas);
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

    function eventClick(map, eventName, args) {
        console.log(map)
        var selectItem = {
            id: map.key,
            position: map.position
        }
        console.log(selectItem);
        $scope.selected = selectItem;
    }

    function getEmergency() {
        console.log("getEmergency");
        $http({
            method: "GET",
            url: baseURL + "bearcat/_all_docs"
        }).then(function successCallback(response) {
            var markers = [{
                id: 111,
                name: "1",
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
                    click: eventClick,
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
                    click: eventClick
                }
            }];
            $scope.markers = markers
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
                name: "東大正門",
                coords: {
                    latitude: 35.7162867089299,
                    longitude: 139.760372489691,
                },
                options: {
                    icon: {
                        url: "images/attraction.png",
                        scaledSize: new google.maps.Size(24, 24)
                    }

                },
                events: {
                    click: eventClick
                }

            }, {
                id: 222,
                name: "三四郎池 ",
                coords: {
                    latitude: 35.7121489092729,
                    longitude: 139.762071669102,
                },
                options: {
                    icon: {
                        url: "images/attraction.png",
                        scaledSize: new google.maps.Size(24, 24)
                    }
                },
                events: {
                    click: eventClick
                }
            }, {
                id: 333,
                name: "三好晋六郎像  ",
                coords: {
                    latitude: 35.7149800585638,
                    longitude: 139.759174883366,
                },
                options: {
                    icon: {
                        url: "images/attraction.png",
                        scaledSize: new google.maps.Size(24, 24)
                    }
                },
                events: {
                    click: eventClick
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
                id: 11111,
                name: "ホテル機山館",
                coords: {
                    latitude: 35.4228644,
                    longitude: 139.4535216,
                },
                options: {
                    icon: {
                        url: "images/hotel_icon.png",
                        scaledSize: new google.maps.Size(24, 24)
                    }

                },
                events: {
                    click: eventClick
                }

            }, {
                id: 22222,
                name: "フォーレスト本郷",
                coords: {
                    latitude: 35.4247636,
                    longitude: 139.4529787,
                },
                options: {
                    icon: {
                        url: "images/hotel_icon.png",
                        scaledSize: new google.maps.Size(24, 24)
                    }
                },
                events: {
                    click: eventClick
                }
            }, {
                id: 33333,
                name: "鳳明館台町別館",
                coords: {
                    latitude: 35.4240634,
                    longitude: 139.4523473,
                },
                options: {
                    icon: {
                        url: "images/hotel_icon.png",
                        scaledSize: new google.maps.Size(24, 24)
                    }
                },
                events: {
                    click: eventClick
                }
            }];
            // $scope.wifimarkers = response
        }, function errorCallback(response) {
            console.error("error: ", response)
        })
    }

    function Restaurant() {
        console.log("getFavoritePlaces");
        $http({
            method: "GET",
            url: baseURL + "bearcat/_all_docs"
        }).then(function successCallback(response) {
            var markers = [{
                id: 1111,
                name: "東大生協 第2食堂",
                coords: {
                    latitude: 35.7135840967522,
                    longitude: 139.764478951693,
                },
                options: {
                    icon: {
                        url: "images/restaurant_icon.png",
                        scaledSize: new google.maps.Size(24, 24)
                    }

                },
                events: {
                    click: eventClick
                }

            }, {
                id: 2222,
                name: "ナマステ本郷三丁目店",
                coords: {
                    latitude: 35.7071440624271,
                    longitude: 139.760389924049,
                },
                options: {
                    icon: {
                        url: "images/restaurant_icon.png",
                        scaledSize: new google.maps.Size(24, 24)
                    }
                },
                events: {
                    click: eventClick
                }
            }, {
                id: 3333,
                name: "レストラン アブルボア",
                coords: {
                    latitude: 35.717854661088,
                    longitude: 139.761658608913,
                },
                options: {
                    icon: {
                        url: "images/restaurant_icon.png",
                        scaledSize: new google.maps.Size(24, 24)
                    }
                },
                events: {
                    click: eventClick
                }
            }]
            $scope.markers = markers;
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


    function filterName(arr, key) {
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (item.id == key) {
                return item.name
            };
        }
    }

}]);
