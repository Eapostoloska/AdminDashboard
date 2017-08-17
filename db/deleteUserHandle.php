<?php 

	require 'db.php';
	deleteUser($_GET['id']);
	header('Location: ../users.php');exit;
	
 ?>