app.service("fetchProductService",function($http){
	this.fetchProduct = (cb)=>{
		$http({
			method:"GET",
			url:"php/fetch-product.php"
		})
		.then((resp)=>cb(resp.data),(err)=>console.log(err));
	}
	this.saveLocal = (productInfo)=>{
		localStorage.setItem("productInfo",JSON.stringify(productInfo));
	}
	this.getLocalData = ()=>{
		return JSON.parse(localStorage.getItem("productInfo"));
	}
})