$( document ).ready(function() {

	$(".group input").on("focus", function () {
		$(this).siblings("label").css({"bottom": "33px", "font-size": "13px", "color": "#5489a5"});
		$(this).on("blur", function () {
			if ($(this).val() == '') {
				$(this).siblings("label").css({"bottom": "0px", "font-size": "15px", "color": "#006599"});
			}
		})
	})

});