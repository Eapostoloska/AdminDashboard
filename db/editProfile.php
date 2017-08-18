<?php 
session_start();

if ($_SERVER['REQUEST_METHOD'] == "POST") {
	require 'db.php';

	
	$name = trim($_POST['name']);
	$lastname = trim($_POST['lastname']);
	$email = trim($_POST['email']);
	$username = trim($_POST['username']);
	$password = trim($_POST['password']);

	if ($name == '') {
		$errors['name'] = true;
	}
	if ($lastname == '') {
		$errors['lastname'] = true;
	}
	if ($email == '') {
		$errors['email'] = true;
	}
	if ($username == '') {
		$errors['username'] = true;
	}
	if ($password == '') {
		$errors['password'] = true;
	}


	if(!empty($errors)){
		// not ok
		$_SESSION['errors'] = $errors;
	} else{
		// ok
		editProfile($_POST);
	}
	
	header('Location: ../profile.php');exit;

	
	
	}

 ?>