$(document).ready(function() {
	$('.collapse-btn').click(()=>{
		$('.sidebar-bg').show();
		$('.sidebar').css('left','0');
	})

	$('.sidebar-bg').click(()=>{
		$('.sidebar-bg').hide();
		$('.sidebar').css('left','-260px');
	})

	$('.close-btn-div').click(()=>{
		$('.sidebar-bg').hide();
		$('.sidebar').css('left','-260px');	
	})
});