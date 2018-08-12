app.controller("productsController",($scope)=>{
	
})

app.controller("mensController",($scope,procssDataService,saveDataService)=>{
	$scope.menCollections = procssDataService.getMensCollection();	
	// console.log($scope.menCollections);
	$scope.jeansColl = procssDataService.getJeans($scope.menCollections);
	// console.log($scope.jeansColl);
	$scope.formalShirts = procssDataService.getFormalShirt($scope.menCollections);
	// console.log($scope.formalShirts);
	$scope.shoes = procssDataService.getShoes($scope.menCollections);
	// console.log($scope.shoes);
	$scope.trousers = procssDataService.getTrousers($scope.menCollections);
	// console.log($scope.trousers);
	$scope.polos = procssDataService.getPolo($scope.menCollections);
	// console.log($scope.polos);
	$scope.tshirts = procssDataService.getTshirt($scope.menCollections);
	// console.log($scope.tshirts);
	$scope.setProduct = (product)=>{
		saveDataService.setProduct(product);
	}
})

app.controller("productController",($scope,saveDataService,$timeout,$rootScope)=>{
	$scope.product = saveDataService.getProduct();
	$scope.index = 0;
	var cartArr = [];
	var obj = {
		product:null,
		size:null
	};
	$scope.setIndex = (index)=>{
		$scope.index = index;
	}
	$scope.addToCart = (product,size)=>{
		$scope.isAddedCart = true;
		$timeout(()=>{$scope.isAddedCart = false},2000);
		obj.product = product;
		obj.size = size;
		cartArr.push(obj);
		saveDataService.saveCart(cartArr,1);
		$rootScope.setLength();
		obj = {
			product:null,
			size:null
		};
		cartArr = [];
	}

})
app.controller("cartController",($scope,saveDataService,$rootScope)=>{
	$scope.quantity = 1;
	$scope.total = 0;
	$scope.carts = saveDataService.getCarts();
	$scope.removeFromCart = (index,cart)=>{
		$scope.carts.splice(index,1);
		$scope.total -=  cart.total;
		saveDataService.saveCart($scope.carts,0);
		$rootScope.setLength();
	}
	for(let cart of $scope.carts){
		cart.total = cart.size.mprice;
		$scope.total += parseInt(cart.size.mprice);
	}
	$scope.updateTotal = (cart,rowTotal)=>{
		cart.total = rowTotal;
		$scope.total = 0;
		for(let cart of $scope.carts){
			$scope.total += parseInt(cart.total);
		}
	}
})

app.controller("formalController",($scope,$rootScope,$timeout,fetchProductService,saveDataService,procssDataService)=>{
	var productColl = fetchProductService.getLocalData();
	$scope.formalShirts = procssDataService.search(productColl,"Formal Shirt");
	
})

app.controller("jeansController",($scope,procssDataService,fetchProductService)=>{
	var productColl = fetchProductService.getLocalData();
	$scope.jeans = procssDataService.search(productColl,"Jeans");
})

app.controller("trousersController",($scope,procssDataService,fetchProductService)=>{
	var productColl = fetchProductService.getLocalData();
	$scope.trousers = procssDataService.search(productColl,"Trousers");
})

app.controller("shoesController",($scope,procssDataService,fetchProductService)=>{
	var productColl = fetchProductService.getLocalData();
	$scope.shoes = procssDataService.search(productColl,"Shoes");
})

app.controller("tshirtsController",($scope,procssDataService,fetchProductService)=>{
	var productColl = fetchProductService.getLocalData();
	$scope.tshirts = procssDataService.search(productColl,"T-Shirt");
})

app.controller("polosController",($scope,procssDataService,fetchProductService)=>{
	var productColl = fetchProductService.getLocalData();
	$scope.polos = procssDataService.search(productColl,"Polo");
})


/*womenm controller*/

app.controller("womenController",($scope,fetchProductService,procssDataService)=>{
	var productColl = fetchProductService.getLocalData();
	$scope.womenColl = procssDataService.search(productColl,"Women")
	// console.log($scope.womenColl);
	$scope.tops = procssDataService.search($scope.womenColl,"Tops");
	// console.log($scope.tops);

	$scope.kurtis = procssDataService.search($scope.womenColl,"Kurtis");
	// console.log($scope.kurtis);

	$scope.yogapants = procssDataService.search($scope.womenColl,"Yoga Pants");
	// console.log($scope.yogapants);

	$scope.flipflops = procssDataService.search($scope.womenColl,"Flip Flop");
	// console.log($scope.flipflops);
})

app.controller("topsController",($scope,fetchProductService,procssDataService)=>{
	var productColl = fetchProductService.getLocalData();
	$scope.womenColl = procssDataService.search(productColl,"Women");
	$scope.tops = procssDataService.search($scope.womenColl,"Tops");
})
app.controller("kurtisController",($scope,fetchProductService,procssDataService)=>{
	var productColl = fetchProductService.getLocalData();
	$scope.womenColl = procssDataService.search(productColl,"Women");
	$scope.kurtis = procssDataService.search($scope.womenColl,"Kurtis");	
})

app.controller("yogaController",($scope,fetchProductService,procssDataService)=>{
	var productColl = fetchProductService.getLocalData();
	$scope.womenColl = procssDataService.search(productColl,"Women");
	$scope.yogapants = procssDataService.search($scope.womenColl,"Yoga Pants");
})

app.controller("flipflopController",($scope,fetchProductService,procssDataService)=>{
	var productColl = fetchProductService.getLocalData();
	$scope.womenColl = procssDataService.search(productColl,"Women");
	$scope.flipflops = procssDataService.search($scope.womenColl,"Flip Flop");
})