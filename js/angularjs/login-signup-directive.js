app.directive("productDir",()=>{
	return {
		link:(scope,elem,attr)=>{
			elem.find(".sort-btns a").click((event)=>{
				elem.find(".sort-btns a").removeClass("active-sort-btn");
				angular.element(event.target).addClass("active-sort-btn");
			});
		}
	}
})