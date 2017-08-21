<?php 

	require "db.php";
	$id = $_GET['id'];
	deleteTask($id);
	header('Location: ../landing.php');exit;

 ?>