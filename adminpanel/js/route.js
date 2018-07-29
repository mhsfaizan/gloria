app.config(($routeProvider,$locationProvider)=>{
	var myresolve = ()=>{
		return {
			"check":($location,saveLocal)=>{
				if(!saveLocal.isLoggedIn()){
					$location.path("./");
				}
			}
		}
	}
	$routeProvider
	.when("/",{
		templateUrl:"pages/login.php"
	})
	.when("/dashboard",{
		resolve:myresolve(),
		templateUrl:"pages/dashboard.php"
	})
	.when("/logout",{
		resolve:{
			deadresolve:(saveLocal,$location)=>{
				saveLocal.clearData();
				$location.path("./");
			}
		}
	})
	.when("/add-product",{
		resolve:myresolve(),
		templateUrl:"pages/add-product.php"
	})
	.otherwise({
		templateUrl:"pages/login.php"
	})
	$locationProvider.html5Mode(true);
	
});