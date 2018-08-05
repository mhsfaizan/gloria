$(document).ready(function() {
	$('.collapse-btn').click(()=>{
		$('.sidebar-bg').show();
		$('.sidebar').css('left','0');
	});

	$('.sidebar-bg').click(()=>{
		$('.sidebar-bg').hide();
		$('.sidebar').css('left','-260px');
	});

	$('.close-btn-div').click(()=>{
		$('.sidebar-bg').hide();
		$('.sidebar').css('left','-260px');	
	});

	$('.search-link .fa').click(function() {
		if ($('.search-link .input-box input').hasClass('hide-input')) {
			$('.search-link .input-box input').addClass('show-input').removeClass('hide-input');
			$('.search-link .fa').addClass('fa-times').removeClass('fa-search');
			$('.whole-page-layer').show();
		}else{
			$('.search-link .input-box input').addClass('hide-input').removeClass('show-input');
			$('.search-link .fa').addClass('fa-search').removeClass('fa-times');
			$('.whole-page-layer').hide();
		}
	});

	$(".sidebar-links a:nth-child(2)").click(()=>{
		$(".mydropdown-menu").toggleClass("mydropdown-menu-show");
	});
});