angular.module('App', ['ngRoute'])


angular.module('App')
	.controller('mainController', ['$scope', '$http', function($scope, $http){

		$scope.test = "testing site angular working-ness"

		var testing = function ($scope){
			console.log("this is working great!")
		}

		$http.get('/api/nameofpage')
			.then(function(returnData){

				$scope.things = returnData.data
			})

		$http.post('/api/nameofpage', $scope.instancefrommodel) //Req TO SERVER
			.then(function(returnData){ //Res FROM SERVER
				console.log('I made something!', returnData)
			})



		}])