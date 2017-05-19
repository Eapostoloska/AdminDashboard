<!DOCTYPE html>
<html>
<head>
	<title>Log In</title>
	<link rel="stylesheet" type="text/css" href="stylesheets/css/style.css">
</head>
<body>
<div class="login-bg">
	<!-- <div id="login-form"> -->
		<form>
			<label>USERNAME</label>
			<input type="text" id="username">
	
			<label>PASSWORD</label>
			<input type="password" id="password">
	
			<div id="submit">
				<div id="keepSignedIn-wrapper">
					<input type="checkbox" id="keepSignedIn">
					<label for="keepSignedIn" id="keepSignedIn-box"></label>
					<label for="keepSignedIn">Keep me signed in</label>
				</div>
			
				<button type="button" id="submitBtn">SIGN IN</button>
			</div>
		</form>
	<!-- </div> -->
</div>

<?php include 'includes/footer.php' ?>