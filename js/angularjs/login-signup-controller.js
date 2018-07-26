app.run((saveLocal,$rootScope)=>{
	$rootScope.setUser = ()=>{
		$rootScope.user = saveLocal.getUser();
	}
	$rootScope.logout = ()=>{
		saveLocal.logOut();
		window.location.href = "index.html";
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
				$scope.loginError = "Invalid Username Or Password";
			}
		});
	}
});

app.controller("dashboardController",($scope,$rootScope,saveLocal)=>{
	$rootScope.setUser();
	if(!saveLocal.isLoggedIn()){
		window.location.href = "index.html";
	}
})