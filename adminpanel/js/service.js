app.service("adminService",function($http){
	this.formConvert = (data)=>{
		var fd = new FormData();
		for(let i in data){
			fd.append(i,data[i]);
		}
		return fd;
	}

	this.login = (myData,cb)=>{
		var formd = this.formConvert(myData);
		$http({
			method:"POST",
			url:"php/login.php",
			data:formd,
			headers:{
				"Content-Type":undefined
			}
		})
		.then((resp)=>cb(resp.data),(err)=>console.log(err));
	}

	this.uploadProduct = (productDetails,cb)=>{
		var fd = this.formConvert(productDetails);
		$http({
			method:'POST',
			data:fd,
			url:"php/upload-product.php",
			headers:{
				"Content-Type":undefined
			}
		})
		.then((resp)=>cb(resp.data),(err)=>console.log(err));
	}
	this.submitSize = (mydata,imgArr,cb)=>{
		var fd = this.formConvert(mydata);
		angular.forEach(imgArr,(file)=>{
			fd.append('imgAr[]',file);
		})
		$http({
			method:"POST",
			data:fd,
			url:"php/upload-size.php",
			headers:{
				"Content-Type":undefined
			}
		})
		.then((resp)=>cb(resp.data),(err)=>console.log(err));
	}
})

app.service("saveLocal",function(){
	this.saveData = ()=>{
		sessionStorage.setItem("adminLogin",JSON.stringify({login:true}));
	}
	this.isLoggedIn = ()=>{
		if(sessionStorage.getItem("adminLogin")!=null || sessionStorage.getItem("adminLogin")!=undefined){
			return true;
		}
		else{
			return false;
		}
	}
	this.clearData = ()=>{
		sessionStorage.clear();
	}
})

