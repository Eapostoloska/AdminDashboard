</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://use.fontawesome.com/1fa2e54b22.js"></script>

<!-- If page is index.php, add js/users.js -->

<?php if($currentPage == 'index.php'){ ?>
	<script src="js/login.js"></script>
<?php } ?>

<?php if($currentPage == 'users.php'){ ?>
	<script src="js/users.js"></script>
<?php } ?>

<?php if($currentPage == 'uielements.php'){ ?>
	<script src="js/uielements.js"></script>
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

	
	<!-- Custom js -->
	<script src="js/index.js"></script>
<?php } ?>


<script>
$( document ).ready(function() {
	$("#signOut").on("click", function () {
		window.location = "index.php";
	})
})
</script>

</body>
</html>