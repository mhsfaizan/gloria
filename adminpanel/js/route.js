app.config(($routeProvider,$locationProvider)=>{
	var myresolve = ()=>{
		return {
			"check":($location,saveData)=>{
				if(!saveData.isLoggedIn()){
					$location.path("./");
				}
			}
		}
	}
	$routeProvider
	.when("/",{
		templateUrl:"pages/login.php"
	})
	.when("/logout",{
		resolve:{
			deadresolve:(saveData,$location)=>{
				saveData.clearData();
				$location.path("./");
			}
		}
	})
	.otherwise({
		templateUrl:"pages/login.php"
	})
	$locationProvider.html5Mode(true);
	
});