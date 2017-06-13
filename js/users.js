$( document ).ready(function() {

	var users = ["elena", "stefanija", "ljubomir", "lilika"];
	
	$("#submitBtn").on("click", function () {
		console.log("clicked")
		var userName = $("#username").val();
		var password = $("#password").val();

		for (var i = 0; i <= users.length; i++) {
			if (userName == users[i]) {
				localStorage.setItem("user", userName);
				window.location = "landing.php";
			}
		}
	})

});