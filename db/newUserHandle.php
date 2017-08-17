<?php 
session_start();

if ($_SERVER['REQUEST_METHOD'] == "POST") {
	require 'db.php';

	$name = trim($_POST['name']);
	$lastName = trim($_POST['lastName']);
	$email = trim($_POST['email']);
	$username = trim($_POST['username']);
	$password = trim($_POST['password']);
	$password2 = trim($_POST['password2']);
	$role = trim($_POST['role']);

	if ($name == '') {
		$errors['name'] = true;
	}if ($lastName == '') {
		$errors['lastName'] = true;
	}if ($email == '') {
		$errors['email'] = true;
	}if ($username == '') {
		$errors['username'] = true;
	}if ($password == '') {
		$errors['password'] = true;
	}if ($password2 == '') {
		$errors['password2'] = true;
	}if ($password != $password2) {
		$errors['password2'] = true;
		$errors['password'] = true;
	}




	if(!empty($errors)){
		// not ok
		$_SESSION['errors'] = $errors;
		header('Location: ../users.php');exit;
	} else{
		// ok
		addNewUser($_POST);
		header('Location: ../users.php');exit;
	}
}


 ?>