<?php 
session_start();

if ($_SERVER['REQUEST_METHOD'] == "POST") {
	require 'db.php';

	$username = trim($_POST['username']);
	$password = trim($_POST['password']);

	if ($username == '') {
		$errors['username'] = "Username is required";
	}if ($password == '') {
		$errors['password'] = "Password is required";
	}


	if(!empty($errors)){
		// not ok
		$_SESSION['errors'] = $errors;
		$_SESSION['values'] = $_POST;
		header('Location: ../index.php');exit;
	} else{
		// ok
		validateUser($username, $password);
	}
}


 ?>