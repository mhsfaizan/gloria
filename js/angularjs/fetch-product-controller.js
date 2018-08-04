app.controller("productController",($scope,fetchProductService)=>{
	fetchProductService.fetchProduct((data)=>{
		let allProducts;
		if(data.status==1){
			fetchProductService.saveLocal(data.data); 
			allProducts = fetchProductService.getLocalData();
		}
	});
})