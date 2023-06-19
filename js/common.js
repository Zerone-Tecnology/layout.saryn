$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$("#burger_menu").on("click", function(){
		$("#burger_menu").toggleClass("active");
		$("#nav").fadeToggle("slow");
		$("#mobile_search").toggleClass("active");
		$(".header_auth").toggleClass("active");
		$(".header_language").toggleClass("active");
		$(".header").toggleClass("active");
	});
	$(".search_btn").on("click", function(){
		$(".search_input").fadeIn("slow");
		$(".search_btn_close").fadeIn("slow");
		$(".search_btn").attr("type","submit");
	});
	$(".search_btn_close").on("click", function(){
		$(".search_input").fadeOut("slow");
		$(".search_btn_close").fadeOut("slow");
		$(".search_btn").removeAttr("type","submit");

	});

});

