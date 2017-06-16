$( document ).ready(function() {
	// localStorage.setItem("user", user);

	var users = ["elena", "stefanija", "ljubomir", "lilika"];

	$('#username').focus(function() {
		$('#login-username').text('Username');
	});

	$('#password').focus(function() {
		$('#login-password').text('Password');
	});

	$("#submitBtn").on("click", function () {
		var userName = $("#username").val();
		var password = $("#password").val();
		validation(users, userName, password);
	});

});