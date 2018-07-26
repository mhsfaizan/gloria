$(document).ready(function() {
	
	// $('.card-header').click((event)=>{
	// 	if ($(event.target).find('.symbol').hasClass('fa-minus')) {
	// 		$(event.target).find('.symbol').removeClass('fa-minus').addClass('fa-plus');
	// 	}else{
	// 		$(event.target).find('.symbol').removeClass('fa-plus').addClass('fa-minus');
	// 	}
	// 	$(event.target).next().toggle('100');
	// });

	$(".owl-carousel").owlCarousel({
		nav : true,
		items: 5
	});
});