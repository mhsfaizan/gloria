app.run((saveLocal,$rootScope,saveDataService,fetchProductService,$timeout)=>{
	$rootScope.user = saveLocal.getUser();
	$rootScope.cartLength = saveDataService.getCarts().length;
	$rootScope.setUser = ()=>{
		$rootScope.user = saveLocal.getUser();
	}
	$rootScope.logout = ()=>{
		saveLocal.logOut();
		window.location.href = "index.html";
	}
	$rootScope.setLength = ()=>{
		$rootScope.cartLength = saveDataService.getCarts().length;
	}
	fetchProductService.fetchProduct((data)=>{
		let allProducts;
		if(data.status==1){
			fetchProductService.saveLocal(data.data); 
			allProducts = fetchProductService.getLocalData();
		}
	});
	$rootScope.sortBy = (isAsc)=>{
		$rootScope.isSort = true;
		if(isAsc==1){
			$rootScope.onPrice = 'sizes[0].mprice';
		}
		else if(isAsc==2){
			$rootScope.onPrice = '-sizes[0].mprice';	
		}
		else{
			$rootScope.onPrice = '';
		}
		$timeout(()=>{$rootScope.isSort = false},2000);
	}
	$rootScope.productLimit = 20;
	$rootScope.increase = ()=>{
		$rootScope.productLimit += 10;
	}
	$rootScope.setProduct = (product)=>{
		saveDataService.setProduct(product);
	}
});
app.controller("loginController",($scope,loginSignup,saveLocal,$rootScope)=>{
	var loginData = {};
	$scope.onSubmit = (form)=>{
		loginData.username = $scope.username;
		loginData.password = $scope.password;
		loginSignup.login(loginData,(resp)=>{
			console.log(resp);
			if(resp.status==1){
				$scope.loginError = resp.message;
			}
			else if(resp.status==2){
				$scope.loginError = undefined;
				saveLocal.saveData(resp.message[0]);
				window.location.href = "dashboard.html";
			}
			else if(resp.status==3){
				form.reset();
				$scope.loginError = "Invalid Username Or Password";
			}
		});
	}
});


app.controller("dashboardController",($scope,$rootScope,saveLocal)=>{
	// $rootScope.setUser();
	if(!saveLocal.isLoggedIn()){
		window.location.href = "login.html";
	}
});

app.controller("signupController",($scope,loginSignup)=>{
	var signupData = {};
	$scope.onSubmit = (form)=>{
		signupData.name = $scope.name;
		signupData.email = $scope.email;
		signupData.contactno = $scope.contactno;
		signupData.password = $scope.password;
		loginSignup.signup(signupData,(data)=>{
			if(data.status==1){
				console.log(data.message);
			}
			else if(data.status==2){
				$scope.signupError = data.message;
			}
		});
	}
});