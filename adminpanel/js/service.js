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