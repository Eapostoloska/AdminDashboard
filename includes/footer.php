</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://use.fontawesome.com/1fa2e54b22.js"></script>

<!-- If page is index.php, add js/users.js -->
<?php 
	$phpSelf = $_SERVER ['PHP_SELF'];
	$phpSelfElements = explode('/', $phpSelf);
	$currentPage = ($phpSelfElements[count($phpSelfElements) - 1]);
?>

<?php if($currentPage == 'index.php'){ ?>
	<script src="js/users.js"></script>
	<script src="js/validation.js"></script>
<?php } ?>

<?php if($currentPage == 'landing.php'){ ?>
	<!-- incremental counter libraries -->
	<script src='https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js'></script>

	<!-- weather -->
	<script src="https://cdn.rawgit.com/darkskyapp/skycons/master/skycons.js"></script>

	<!-- charts -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.js"></script>

	<!-- Leaflet Map -->
 	<script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>
	<!-- Custom css -->
	<script src="js/users.js"></script>
	<script src="js/index.js"></script>
<?php } ?>


<script>
	var currentUser = localStorage.getItem("user");
	$(".current-user").text(currentUser);
</script>



</body>
</html>