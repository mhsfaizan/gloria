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


app.service("procssDataService",function(fetchProductService){
	this.search = (products,param)=>{
		var obj ={
			product:{},
			sizes:[]
		}
		var Collection  = [];
		if(param=="Men"){
			for(let prod of products){
				if(prod.product.category==param){
					obj.product = prod.product;
					obj.sizes = prod.sizes;
					Collection.push(obj);
				}
				obj = {
					product:{},
					sizes:[]
				}
			}
		}
		else{
			for(let prod of products){
				if(prod.product.sub_category==param){
					obj.product = prod.product;
					obj.sizes = prod.sizes;
					Collection.push(obj);
				}
				obj = {
					product:{},
					sizes:[]
				}
			}
		}
		return Collection;
	}
	this.getMensCollection = ()=>{
		var menColl = fetchProductService.getLocalData();
		return this.search(menColl,"Men");
	}
	this.getJeans = (menColl)=>{
		return this.search(menColl,"Jeans");
	}
	this.getFormalShirt = (menColl)=>{
		return this.search(menColl,"Formal Shirt");
	}
	this.getShoes = (menColl)=>{
		return this.search(menColl,"Shoes");
	}
})