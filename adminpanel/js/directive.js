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
			elem.find(".add-color-row").click((event)=>{
				scope.$apply(()=>{
					scope.colorObject.color = angular.element(event.target).prev().find("input[name~='color']").val();
					scope.Attr.colorArr.push(scope.colorObject);
					console.log(scope.Attr.colorArr);
				});
				var span = `<span>		        
				           		<input type='text' name='color' placeholder='enter color' class='form-control'><br>
								<input type='file' name='image' class='form-control'>
							</span>`;
				angular.element(event.target).before(span);
			});
			elem.find(".add-more-size").click(()=>{
				var row = `
				            <tr>
						        <td align="center">
						        	<select class="form-control">
						        		<option>Select Size</option>
						        		<option>XL</option>
						        		<option>L</option>
						        		<option>M</option>
						        		<option>S</option>
						        	</select>
						        </td>
						        <td align="center">
						        	<span>
						        		<input type="text" name="" placeholder="enter color" class="form-control"><br>
							        	<input type="file" name="" class="form-control">
						        	</span>
						        	
						        	<a href="#" class="add-color-row">Add +</a>
						        </td>
						        <td><input type="number" name="" placeholder="Enter Price" class="form-control"></td>
						        <td><input type="number" name="" placeholder="Discount" class="form-control" ng-model="discount" required></td>
						     </tr>
				          `;
			    elem.find(".add-more-size").parent().parent().before(row);
			});
		}
	}
});

app.directive("colorImg",()=>{
	return{
		link:(scope,elem,attr)=>{
			elem.change((event)=>{
				scope.$apply(()=>{
					scope.colorObject.images.push(event.target.files[0]);
					console.log(scope.colorObject.images);
				});
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
			elem.change(()=>{
				scope.$apply(()=>{
					ngModel.$render();

				});
			})
		}
	}
})