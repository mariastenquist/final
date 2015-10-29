angular.module('myApp', [])

angular.module('myApp')
	.controller('mainController', ['$scope', '$http', function($scope, $http){
		
		$scope.title = "Carsharing"

		$http.get('/api/users')
			.then(function(returnData){
				$scope.heroes = returnData.data
			})

		$scope.createUser = function(){

			$http.post('/api/heroes', $scope.newHero) //Req TO SERVER
				.then(function(returnData){ //Res FROM SERVER
					console.log('Made a hero! ', returnData)
				})

		}
		
	}])

angular.module('App')
	.controller('heroController', ['$scope', '$http', function($scope, $http){

		var heroName = window.location.pathname.split('/')[2]

		$http.get('/api/heroes/' + heroName)
			.then(function(returnData){
				$scope.hero = returnData.data
			})

	}])