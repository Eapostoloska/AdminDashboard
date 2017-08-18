<?php 
session_start();

if ($_SERVER['REQUEST_METHOD'] == "POST") {
	require 'db.php';

		addNewTask($_POST);
		header('Location: ../landing.php');exit;
	}
	
 ?>