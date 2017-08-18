<?php 

  require 'db/db.php';
  session_start();
  $loggedUser = $_SESSION['name'] .' '. $_SESSION['lastname'];
  $userRole = $_SESSION['role'];

  $phpSelf = $_SERVER ['PHP_SELF'];
  $phpSelfElements = explode('/', $phpSelf);
  $currentPage = ($phpSelfElements[count($phpSelfElements) - 1]);
 
  if($currentPage == 'landing.php'){
    $allUsers = getAllUsers();
    $allTasks = getAllTasks($_SESSION['name']);
  }

 ?>

<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Admin Dashboard</title>
  <!-- CSS -->
	<link rel="stylesheet" type="text/css" href="stylesheets/css/style.css">
    <!-- weather -->
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.css">
  <!-- chart -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css" rel="stylesheet" />
  <!-- leaflet map -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
</head>
<body>

<input type="checkbox" id="nav-toggle" />
<nav>
    <p>Welcome</p>
    <h3><?= $loggedUser ?></h3>
  <ul>
    <a href="landing.php"><li> Home <i class="fa fa-home" aria-hidden="true"></i></li></a>
    <a href="users.php"><li> Users <i class="fa fa-users" aria-hidden="true"></i></li></a>
    <a href="profile.php"><li> Profile <i class="fa fa-user" aria-hidden="true"></i></li></a>
    <a href="uielements.php"><li> UI elements <i class="fa fa-desktop" aria-hidden="true"></i></li></a>
    <a href="#"><li> Charts <i class="fa fa-line-chart" aria-hidden="true"></i></li></a>
    <a href="#"><li> Shop <i class="fa fa-shopping-basket" aria-hidden="true"></i></li></a>
    <a href="#"><li> Tasks <i class="fa fa-thumb-tack" aria-hidden="true"></i></li></a>
    <a href="#"><li> Calendar <i class="fa fa-calendar" aria-hidden="true"></i></li></a>
    <a id="signOut"><li> Sign Out <i class="fa fa-sign-out" aria-hidden="true"></i></li></a>
    <a id="toggle-a"><li> Hide Menu <label for="nav-toggle"><div id="hamburger"></div></label></li></a>

  </ul>

</nav>

<div class="body-wrapper">