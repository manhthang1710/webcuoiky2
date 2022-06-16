$(window).on('load', function(event) {
	$('body').removeClass('preloading');
	$('.load').delay(2000).fadeOut('fast');
	$('.loader').delay(2000).fadeOut('fast');
});