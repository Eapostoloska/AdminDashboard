</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://use.fontawesome.com/1fa2e54b22.js"></script>

<!-- If page is index.php, add js/users.js -->
<?php 
    $phpSelf = $_SERVER['PHP_SELF'];
    $phpSelfElements = explode('/', $phpSelf);
    if ($phpSelfElements[count($phpSelfElements)-1] == 'index.php') {
 ?>
    <script src="js/users.js" />
<?php
    }
?>

</body>
</html>