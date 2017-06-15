<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Log In</title>
	<link rel="stylesheet" type="text/css" href="stylesheets/css/style.css">
</head>
<body>
<div class="login-bg">
	<!-- <div id="login-form"> -->
		<form>

			<div class="group">      
		      <input type="text" required id="username">
		      <span class="bar"></span>
		      <label id="login-username">Username</label>
		    </div>

		    <div class="group">      
		      <input type="text" required id="password">
		      <span class="bar"></span>
		      <label id="login-password">Password</label>
		    </div>
	
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