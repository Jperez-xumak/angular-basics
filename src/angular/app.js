var app = angular.module("GalleryApp", []);

app.controller("GalleryController", ["$scope", "$http", function($scope, $http){
	$scope.gallery = [];
	$http({ method: "GET", url: "assets/json/gallery.json"})
	.success(function(data){
		$scope.gallery = data;
	});

}]);