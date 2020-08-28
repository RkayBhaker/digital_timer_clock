document.addEventListener('DOMContentLoaded', ()=>{
	window.onscroll = function(){
		menuBar()
	}
	function menuBar(){
		var menuCss = document.querySelector('.menu_bar')
		setInterval(function(){
		if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
			$('.menuIcon_container').fadeTo('fast', '1')
			
		}else{
			$('.menuIcon_container').fadeTo('fast', '0.9')
		}
	},10)
	}

	$('#cookieBtn').click(function () {
		$('.cookie_container').hide();
	})
	$('#closeBtn').click(function () {
		$('.cookie_container').hide();
	})
})