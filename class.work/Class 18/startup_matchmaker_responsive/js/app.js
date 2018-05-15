

		$("#burger").click(toggleNav);

		function toggleNav() {
			$("#mobile-nav-items").slideToggle();
		}
console.log(toggleNav)

		$(window).resize(hideNav);

		function hideNav() {
			var width = $(window).width();
			
			if (width < 780) {
				$("nav").hide();
			}
		} 