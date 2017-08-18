<?php include 'includes/header.php' ?>
<?php 
	$fetchData = fetchUserData($_SESSION['user']);
	$errors = (isset($_SESSION['errors'])) ? $_SESSION['errors'] : [];
	unset($_SESSION['errors']);
?>

	<div class="table-header" id="profile-header">User Profile</div>


<form method="POST" action="db/editProfile.php" class="edit-profile">
	<input type="hidden" name="id" value="<?php echo $_SESSION['user']; ?>">
	<div>
		<label>Name</label>
		<input type="text" <?php if (isset($errors['name'])) { echo "class='input-error'";} ?> name="name"  value="<?php echo $fetchData['name'] ?>">
	</div>
	<div>
		<label>Last name</label>
		<input type="text" <?php if (isset($errors['lastname'])) { echo "class='input-error'";} ?> name="lastname"  value="<?php echo $fetchData['lastname'] ?>">
	</div>
	<div>
		<label>Email</label>
		<input type="email" <?php if (isset($errors['email'])) { echo "class='input-error'";} ?> name="email"  value="<?php echo $fetchData['email'] ?>">
	</div>
	<div>
		<label>Username</label>
		<input type="text" <?php if (isset($errors['username'])) { echo "class='input-error'";} ?> name="username"  value="<?php echo $fetchData['username'] ?>">
	</div>
	<div>
		<label>Password</label>
		<input type="password" <?php if (isset($errors['password'])) { echo "class='input-error'";} ?> name="password"  value="<?php echo $fetchData['password'] ?>">
	</div>
	<div>
		<button type="submit">Save changes</button>
	</div>
</form>





<?php include 'includes/footer.php' ?>