<?php 
session_start();

if ($_SERVER['REQUEST_METHOD'] == "POST") {
	require 'db.php';

	editUser($_POST);
	header('Location: ../users.php');exit;
	
	}

 ?>