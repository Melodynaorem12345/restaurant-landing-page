(function($) {
	"use strict";

	/*
	|----------------------------------------------------------------------------
	| FOR STICKY MENU
	|----------------------------------------------------------------------------
	*/
	$('.navbar-nav>li>a').on('click', function(){
	    $('.navbar-collapse').collapse('hide');
	});

    // add class in navbar
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 10){  
            $('.navbar').addClass("color-set");
        }
        else{
            $('.navbar').removeClass("color-set");
        }
    });
	
	

})(window.jQuery);