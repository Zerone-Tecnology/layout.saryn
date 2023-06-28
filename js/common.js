$(function () {

	//SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {

	};

	$("img, a").on("dragstart", function (event) { event.preventDefault(); });


});

$(window).load(function () {
	$(document).ready(function () {

		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");

		$("#burger_menu").on("click", function () {
			$("#burger_menu").toggleClass("active");
			$("#nav").fadeToggle("slow");
			$("#mobile_search").toggleClass("active");
			$(".header_auth").toggleClass("active");
			$(".header_language").toggleClass("active");
			$(".header").toggleClass("active");
		});

		$("#search_btn").on("click", function () {
			$("button.search_btn").css("display", "flex");
			$("#search_btn").fadeOut();
			$(".search_input").fadeIn("slow");
			$(".search_btn_close").fadeIn("slow");
		});

		$(".search_btn_close").on("click", function () {
			$("#search_btn_submit").fadeOut();
			$("#search_btn").fadeIn();
			$(".search_input").fadeOut("slow");
			$(".search_btn_close").fadeOut("slow");

		});

		$(".archive_select li").on("click", function () {
			$(this).toggleClass("active");
		});
		$(".logged_in_dropdown_btn").on("click", function () {
			$(".logged_in_dropdown").fadeToggle("slow");
		});
		$(".dropdown_menu").on("click", function () {
			$("sub_menu", this).fadeToggle("slow");
			// alert("this");
		});

		var parent_registration_width = $(".registration_slider_block").width();

		$(".registration_slider_next").on("click", function () {
			$(".registration_slider_block").css("transform", `translate(-${parent_registration_width}px, 0px)`);
			parent_registration_width += parent_registration_width;
		});
		$("input[name=email]").on("input", function () {
			var inputValue = $(this).val();
			$("input[name=username]").val(inputValue);
			
			if($("input[name=email]").val.lenght > 1){
				alert("required");
			}
		});
		
		// jQuery.validator.setDefaults({
		// 	debug: true,
		// 	success: "valid"
		// });
		// $("input[name=email]").validate({
		// 	rules: {
		// 		field: {
		// 			required: true
		// 		}
		// 	}
		// });
	});
});

