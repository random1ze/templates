$(function () {

	var
		header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();

	// Fixed header
	checkscroll(scrollOffset)
	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop();
		checkscroll(scrollOffset);
	});

	function checkscroll(scrollOffset) {

		if (scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


	// Smooth scroll
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var
			$this = $(this),
			blockId = $this.data("scroll"),
			blockOffset = $(blockId).offset().top;
		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 2000);
	})

	// Menu nav toggle
	$("#nav_toggle").on("click", function (event) {
		event.preventDefault();
		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	})

	// collapse wedo
	$("[data-collapse]").on("click", function (event) {
		event.preventDefault();

		var
			$this = $(this),
			blockId = $this.data("collapse");

		$(this).toggleClass("active");
	});

	// slider

	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1
	})


})