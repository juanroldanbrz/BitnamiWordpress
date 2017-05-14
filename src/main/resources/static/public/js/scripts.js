jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    $.backstretch([
        "public/img/backgrounds/img1.jpg",
        "public/img/backgrounds/img2.jpg",
    ], {duration: 10000, fade: 750});


    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.login-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
});
