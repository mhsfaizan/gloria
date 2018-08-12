app.run(($rootScope,saveLocal)=>{	
	$rootScope.showNav = saveLocal.isLoggedIn();
	$rootScope.setUser = ()=>{
		$rootScope.showNav = saveLocal.isLoggedIn();
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


app.controller("productCtrl",($scope,adminService)=>{
	$scope.isSave = false;
	$scope.sozeObjArr = [];
	$scope.sizeObj = { 
		size:'',
		color:{},
		price:'',
		discount:''
	} 
	$scope.colorObj = {
		color:'',
		imagesArr:[]
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
			subCategory:['Jeans','T-Shirt','Formal Shirt','Shoes','Trousers','Polo']
		},
		{
			id:2,
			item:'Women',
			subCategory:['Tops','Kurtis','Yoga Pants','Flip Flop']
		},
		{
			id:3,
			item:'Home Decore',
			subCategory:['']
		},
		{
			id:4,
			item:'Watches',
			subCategory:['Analog','Digital',]
		},
		{
			id:5,
			item:'Accessories',
			subCategory:['Belts','Wallets','Hand Bags','Artificial Jwellery']
		}
	];
	$scope.cat = $scope.categories[0];
	$scope.subCat = $scope.categories[0].subCategory[0];
	var prodDetails = {};
	$scope.onProSubmit = (form)=>{
		prodDetails.productName = $scope.productName;
		prodDetails.cat = $scope.cat.item;
		prodDetails.subCat = $scope.subCat;
		prodDetails.description = $scope.description;
		adminService.uploadProduct(prodDetails,(data)=>{
			if(data.status==1){
				$scope.proId = data.data.product_id;
				alert("uploaded Product Succesfully");
				$scope.hideProduct();
				form.reset();
			}
			else{
				alert("Your Product is not uploaded");
				form.reset();
			}
		});
	}
	$scope.size = "Select Size"
	var attr = {};
	$scope.imagesArr = [];
	$scope.onSizeSub = (form)=>{
		attr.size = $scope.size;
		attr.color = $scope.color;
		attr.price = $scope.price;
		attr.proId = $scope.proId;
		attr.discount = $scope.discount;
		console.log(attr);
		adminService.submitSize(attr,$scope.imagesArr,(data)=>{
			console.log(data);
			if(data.status==1){
				alert(data.data+"Please Add More Sizes Of your Products");
				$scope.imagesArr = [];
				form.reset();
			}
			else if(data.status==3){
				alert(data.data);
			}
			else{
				alert("Server Error");
			}
		})
	}
})