app.directive("myNav",()=>{
	return{
		templateUrl:"include/nav.php",
		link:(scope,elem,attr)=>{
			elem.find('.open-btn').click(()=>{
				$('.open-btn').hide();
				$('.close-btn').show();
				$('#sidenav').css('margin-left','0px');
			})
			elem.find('.close-btn').click(()=>{
				$('.close-btn').hide();
				$('.open-btn').show();
				$('#sidenav').css('margin-left','-270px');
			})
			elem.find('.sidenav-li').not('.more-drp-btn,.material-drp-btn').click(function() {
				$('.close-btn').hide();
				$('.open-btn').show();
				$('#sidenav').css('margin-left','-270px');
			})
		}
	}
});

app.directive("productDir",()=>{
	return{
		link:(scope,elem,attr)=>{
			elem.find(".tabs-container button").click((event)=>{
				elem.find(".tabs-container button").removeClass("btn-active");
				angular.element(event.target).addClass("btn-active");
			});
			elem.find(".product-info button").click(()=>{
				elem.find(".tabs-container button").removeClass("btn-active");
				elem.find(".tabs-container button:last-child").addClass("btn-active");
			});
			// elem.find(".add-more-size").click((event)=>{
			//   scope.isSave = true;
			//  scope.colorObj.color = scope.color;
			//   scope.sizeObj.size = scope.size;
			//   scope.sizeObj.color = scope.colorObj;
			//   scope.sizeObj.price = scope.price;
			//   scope.sizeObj.discount = scope.discount;
			//   scope.sozeObjArr.push(scope.sizeObj);
			//   scope.colorObj = {
			// 		color:'',
			// 		imagesArr:[]
			//   }
			//   scope.sizeObj = { 
			// 		size:'',
			// 		color:{},
			// 		price:'',
			// 		discount:''
			//    } 
			//   console.log(scope.sozeObjArr);
			//   elem.find("form[name='sizeForm']")[0].reset();
			// });
		}
	}
});

app.directive("colorImg",()=>{
	return{
		link:(scope,elem,attr)=>{
			elem.bind('change',(event)=>{
					scope.imagesArr.push(event.target.files[0]);
			});
		}
	}
})

app.directive("validFile",()=>{
	return {
		require:'ngModel',
		link:(scope,elem,attr,ngModel)=>{
			ngModel.$render = function () {
                ngModel.$setViewValue(elem.val());
            };
			elem.bind('change',(e)=>{
				if(elem.val()!=""){
					scope.$apply(()=>{
						ngModel.$render();
					});
				}
				else{
					console.log(elem.val());
				}
			})
		}
	}
})