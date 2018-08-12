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
		if(param=="Men"||param=="Women"){
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
	this.getTrousers = (menColl)=>{
		return this.search(menColl,"Trousers");
	}
	this.getPolo = (menColl)=>{
		return this.search(menColl,"Polo");
	}
	this.getTshirt = (menColl)=>{
		return this.search(menColl,"T-Shirt");
	}
});

app.service("saveDataService",function(){
	this.setProduct = (product)=>{
		console.log(product);
		
		localStorage.setItem("product",JSON.stringify(product));
		console.log(JSON.parse(localStorage.getItem("product")));
	}
	this.getProduct = ()=>{
		return JSON.parse(localStorage.getItem("product"));
	}
	this.saveCart = (cartArr,isConcat)=>{
		console.log(isConcat);
		// if(localStorage.getItem("carts")!=null){
		// 	var oldCart = JSON.parse(localStorage.getItem("carts"));
		// 	var newCart = oldCart.concat(oldCart);
		// 	localStorage.setItem("carts",JSON.stringify(newCart));
		// }
		// else{
		// 	localStorage.setItem("carts",JSON.stringify(cartArr));
		// }
		if(isConcat==0){
			localStorage.setItem("carts",JSON.stringify(cartArr));
		}
		else if(isConcat==1){
			if(localStorage.getItem("carts")!=null){
				var oldCart = JSON.parse(localStorage.getItem("carts"));
				var newCart = oldCart.concat(cartArr);
				localStorage.setItem("carts",JSON.stringify(newCart));
			}
			else{
				localStorage.setItem("carts",JSON.stringify(cartArr));
			}	
		}
	}
	this.getCarts = ()=>{
		if(localStorage.getItem("carts")!=null){
			return JSON.parse(localStorage.getItem("carts"));
		}
		else{
			return [];
		}
	}
})