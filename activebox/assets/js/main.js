$(function () {
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight()
	let scrollPos = $(window).scrollTop(); //позиция скролла от верха
	let nav = $("#nav")
	let navToggle = $("#navToggle")

	// fixed Header
	checkScroll(scrollPos, introH)
	$(window).on("scroll resize", function () { //изменяется значение позиции скролл
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos, introH)
	})

	function checkScroll(scrollPos, introH) {
		if (scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	// Smooth scroll
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault(); //отменяет стандартное поведение ссылки
		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;
		nav.removeClass("show")
		$("html,body").animate({
			scrollTop: elementOffset - 70
		}, 700);
	})

	// nav toggle
	navToggle.on("click", function (event) {
		event.preventDefault();
		nav.toggleClass("show")
	})

	// Reviews https://kenwheeler.github.io/slick/
	let slider = $("#reviewsSlider");
	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		autoplay: true,
	});
})