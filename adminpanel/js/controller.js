app.run(($rootScope,saveLocal)=>{	
	$rootScope.showNav = saveLocal.isLoggedIn();
	$rootScope.setUser = ()=>{
		$rootScope.showNav = saveLocal.isLoggedIn();
		console.log($rootScope.showNav);
	}
})


app.controller("adminLoginCtrl",($scope,$rootScope,saveLocal,adminService,$location)=>{
	var adminData = {};
	$scope.onSubmit = (form)=>{
		adminData.username = $scope.username;
		adminData.password = $scope.password;
		adminService.login(adminData,(data)=>{
			if(data.status==1){
				saveLocal.saveData();
				$rootScope.setUser();
				$location.path("/dashboard");
			}
		});
	}
})


app.controller("productCtrl",($scope)=>{
	$scope.Attr = {
		size:'',
		colorArr:[],
		price:'',
		descount:''
	};
	$scope.colorObject = {
		color:'',
		images:[]
	}
	$scope.isShowPro = true;
	$scope.showProduct = ()=>{
		$scope.isShowPro = true;
	}
	$scope.hideProduct = ()=>{
		$scope.isShowPro = false;
	}
	$scope.categories = [
		{
			id:1,
			item:'Men',
			subCategory:['Jeans','tshirt','etc']
		},
		{
			id:2,
			item:'Women',
			subCategory:['jeans','t-shirt']
		}
	];
	$scope.cat = $scope.categories[0];
	$scope.subCat = $scope.categories[0].subCategory[0];
	var prodDetails = {
		productInfo:{},
		productAttr:[] 
	};
	$scope.onProSubmit = (form)=>{
		prodDetails.productInfo.productName = $scope.productName;
		prodDetails.productInfo.cat = $scope.cat.item;
		prodDetails.productInfo.subCat = $scope.subCat;
		prodDetails.productInfo.description = $scope.description;
		console.log(prodDetails.productInfo);
	}
	$scope.size = "Select Size"
	var attr = {};
	$scope.onSizeSub = (form)=>{
		attr.size = $scope.size;
		attr.color = $scope.color;
		attr.images = $scope.images;
		attr.price = $scope.price;
		attr.discount = $scope.discount;
		console.log(attr);
	}
})