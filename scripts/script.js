$( document ).ready(function() {

	$( "#home" ).on( "click", function() {
  		
		$("#main").load("pages/home.html");
		$('li').removeClass();
    	$(this).parent().addClass('active');

	});

	$( "#product" ).on( "click", function() {
  		
		$("#main").load("pages/products.html");
		$('li').removeClass();
    	$(this).parent().addClass('active');

	});

	$( "#about_us" ).on( "click", function() {
  		
		$("#main").load("pages/about_us.html");
		$('li').removeClass();
    	$(this).parent().addClass('active');

	});

});