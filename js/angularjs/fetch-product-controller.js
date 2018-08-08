app.controller("productController",($scope,fetchProductService)=>{
	fetchProductService.fetchProduct((data)=>{
		let allProducts;
		if(data.status==1){
			fetchProductService.saveLocal(data.data); 
			allProducts = fetchProductService.getLocalData();
		}
	});
})

app.controller("mensController",($scope,procssDataService)=>{
	$scope.menCollections = procssDataService.getMensCollection();	
	// console.log($scope.menCollections);
	$scope.jeansColl = procssDataService.getJeans($scope.menCollections);
	// console.log($scope.jeansColl);
	$scope.formalShirts = procssDataService.getFormalShirt($scope.menCollections);
	// console.log($scope.formalShirts);
	$scope.shoes = procssDataService.getShoes($scope.menCollections);
	// console.log($scope.shoes);
})