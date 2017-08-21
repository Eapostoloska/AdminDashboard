<?php
	session_start();
	$errors = (isset($_SESSION['errors'])) ? $_SESSION['errors'] : [];
	unset($_SESSION['errors']);
	unset($curentUser);

	$phpSelf = $_SERVER ['PHP_SELF'];
	$phpSelfElements = explode('/', $phpSelf);
	$currentPage = ($phpSelfElements[count($phpSelfElements) - 1]);
 ?>

<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Log In</title>
	<link rel="stylesheet" type="text/css" href="stylesheets/css/style.css">
</head>
<body>
<div class="login-bg">
		<form method="POST" action="db/loginHandle.php">
			<div class="group">      
		      <input type="text" id="username" name="username">
		      <span class="bar"></span>
		      <label id="login-username">Username</label>
		      <p><?php echo isset($errors['username']) ? $errors['username'] : ''; ?></p>
		    </div>

		    <div class="group">      
		      <input type="password" id="password" name="password">
		      <span class="bar"></span>
		      <label id="login-password">Password</label>
		      <p><?php echo isset($errors['password']) ? $errors['password'] : ''; ?></p>
		    </div>
	
			<div id="submit">
				<button type="submit" id="submitBtn">SIGN IN</button>
			</div>
		</form>
</div>

<?php include 'includes/footer.php' ?>