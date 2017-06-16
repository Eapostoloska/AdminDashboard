function validation(list, user, pass) {

	//username validation
	if(user == ''){
		$('#login-username').text('Username is required!');
	}
	else{
		if(pass == ''){
			$('#login-password').text('Password is required!');
		}
		else{
		var passwrong = 0;
		var userFound = 0;
		for (var i = 0; i <= list.length; i++) {
			if (user == list[i]) {
				if(pass == '123'){
					localStorage.setItem("user", user);
					window.location = "landing.php";
					userFound = 1;
				}
				else {
					passwrong = 1;
					$('#login-username').text('User and password does not match.');
				}
			}
			if(passwrong == 0 && userFound == 0){
				$('#login-username').text('User entered does not exist.');
			}
		}
		}
	}

	//password validation
	if(pass == ''){
		$('#login-password').text('Password is required!');
	}
	
}