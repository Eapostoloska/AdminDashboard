$( document ).ready(function() {

	$("#submitBtn").click(function(event){
	    event.preventDefault();
	});

	var username = $("#username").val();
	var password = $("#password").val();

	$("#submitBtn").on("click", function () {
		console.log("button click");
		if (username == "eapostoloska" || password == "helloworld") {
			localStorage.setItem("loggedUser", username);
			console.log("tru");
			// location.href = "landing.php";
		}else{
			console.log("false");
		}
	})



});