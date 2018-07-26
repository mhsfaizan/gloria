app.service("saveLocal",function(){
	this.saveData = (data)=>{
		localStorage.setItem("login",JSON.stringify(data));
	}
	this.isLoggedIn = ()=>{
		if(localStorage.getItem("login")!=null||localStorage.getItem("login")!=undefined){
			return true;
		}
		else{
			return false;
		}
	}
	this.getUser = ()=>{
		return JSON.parse(localStorage.getItem("login"));
	}	
	this.logOut = ()=>{
		localStorage.clear();
	}
});



app.service("loginSignup",function($http){
	this.convertToForm = (data)=>{
		var fd = new FormData();
		for(let i in data){
			fd.append(i,data[i]);
		}
		return fd;
	}
	this.myPost = (myData)=>{
		
	}
	this.login = (data,cb)=>{
		var myData  = this.convertToForm(data);
		$http({
			method:"POST",
			url:"php/login.php",
			data:myData,
			headers:{
				"Content-Type":undefined
			}
		})
		.then((resp)=>cb(resp.data),(error)=>console.log(error));
	}
	this.signup = (data,cb)=>{
		var myData = this.convertToForm(data);
		$http({
			method:"POST",
			url:"php/signup.php",
			data:myData,
			headers:{
				"Content-Type":undefined
			}
		})
		.then((resp)=>cb(resp.data),(error)=>console.log(error));
	}
});