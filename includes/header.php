<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Admin Dashboard</title>
	<link rel="stylesheet" type="text/css" href="stylesheets/css/style.css">
    <!-- weather -->
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.css">
  <!-- chart -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css" rel="stylesheet" />
  <!-- leaflet map -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
</head>
<body>

<nav>
  <ul>
  	<li><p>Welcome <span id="greeting"></span></p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjBD39JYJwj_uy63NMPIrweOPGmrq-TY3YPNvYorvWc_j2T53"></li>
    <a href="#"><li> Home <i class="fa fa-home" aria-hidden="true"></i></li></a>
    <a href="#"><li> Mail <i class="fa fa-envelope-o" aria-hidden="true"></i></li></a>
    <a href="#"><li> UI Elements <i class="fa fa-desktop" aria-hidden="true"></i></li></a>
    <a href="#"><li> Tables <i class="fa fa-table" aria-hidden="true"></i></li></a>
    <a href="#"><li> Charts <i class="fa fa-line-chart" aria-hidden="true"></i></li></a>
    <a href="#"><li> Shop <i class="fa fa-shopping-basket" aria-hidden="true"></i></li></a>
    <a href="#"><li> Tasks <i class="fa fa-thumb-tack" aria-hidden="true"></i></li></a>
    <a href="#"><li> Calendar <i class="fa fa-calendar" aria-hidden="true"></i></li></a>
    <a id="signOut"><li> Sign Out <i class="fa fa-sign-out" aria-hidden="true"></i></li></a>
  </ul>
</nav>

<div class="body-wrapper">