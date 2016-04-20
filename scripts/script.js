// Page can't be manipulated safely until the document is "ready".
$( document ).ready(function() {

	// If "Home" button is clicked change information in the id="main" div.
	$( "#home" ).on( "click", function() {

		// Load home.html to id="main" div in the index.html.
		$("#main").load("pages/home.html");
		// Remove classes from button.
		$('li').removeClass();
			// Set active to class to see that the button is clicked.
    	$(this).parent().addClass('active');

	});

	// If "Product" button is clicked change information in the id="main" div.
	$( "#product" ).on( "click", function() {

		// Load products.html to id="main" div in the index.html.
		$("#main").load("pages/products.html");
		// Remove classes from button.
		$('li').removeClass();
			// Set active to class to see that the button is clicked.
    	$(this).parent().addClass('active');

	});

	// If "About us" button is clicked change information in the id="main" div.
	$( "#about_us" ).on( "click", function() {

		// Load about_us.html to id="main" div in the index.html.
		$("#main").load("pages/about_us.html");
		// Remove classes from button.
		$('li').removeClass();
			// Set active to class to see that the button is clicked.
    	$(this).parent().addClass('active');

	});

});
