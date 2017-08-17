<?php include 'includes/header.php' ?>
<?php $fetchUsers = fetchUsers();

	$errors = (isset($_SESSION['errors'])) ? $_SESSION['errors'] : [];
	unset($_SESSION['errors']);
?>

<div class="header">
	<div class="table-header">User Management</div>
	<?php if ($userRole == 'admin') { ?>
		<button id="new-user-btn">Add User</button>
	<?php }?>
</div>


<form method="POST" action="db/newUserHandle.php" class="new-user <?php if (empty($errors)) { echo "display-none"; } ?> " >
	<input type="text" name="name" placeholder="Name" <?php if (isset($errors['name'])) { echo "class='input-error'";} ?>>
	<input type="text" name="lastName" placeholder="Last Name" <?php if (isset($errors['lastName'])) { echo "class='input-error'";} ?>>
	<input type="text" name="email" placeholder="email" <?php if (isset($errors['email'])) { echo "class='input-error'";} ?>>
	<input type="text" name="username" placeholder="Username" <?php if (isset($errors['username'])) { echo "class='input-error'";} ?>>
	<input type="password" name="password" placeholder="Password" <?php if (isset($errors['password'])) { echo "class='input-error'";} ?>>
	<input type="password" name="password2" placeholder="Confirm Password" <?php if (isset($errors['password2'])) { echo "class='input-error'";} ?>>
	<select name="role">
		<option value="observer">Observer</option>
		<option value="moderator">Moderator</option>
		<option value="admin">Admin</option>
	</select>

	<button type="submit" class="sumbit disabled">Add</button>
	<a href="#" id="new-user-cancel"><i class="fa fa-times" aria-hidden="true"></i></a>
</form>

<form method="POST" action="db/editUserHandle.php" >
	<table class="users-table">
	    <thead>
	        <tr>
	            <th>Name</th>
	            <th>Last Name</th>
	            <th>E-mail</th>
	            <th>Username</th>
	            <th>Role</th>
	            <?php if ($userRole == 'admin') { ?>
		            <th>Actions</th>
		        <?php }?>    
	        </tr>
	    </thead>
	    <tbody>
	    	<?php foreach ($fetchUsers as $key => $user) { ?>
		        <tr data="<?php echo $user['id']; ?>">
		            <td class="user-info" data="name"><?= $user['name'] ?></td>
		            <td class="user-info" data="lastName"><?= $user['lastname'] ?></td>
		            <td class="user-info" data="email"><?= $user['email'] ?></td>
		            <td class="user-info" data="username"><?= $user['username'] ?></td>
		            <td class="user-info capitalize" data="role"><?= $user['role'] ?></td>
			        <?php if ($userRole == 'admin') { ?>
			            <td class="action-btns">
			            	<a href="#" class="edit-user"><i class="fa fa-pencil" aria-hidden="true"></i></a>
			            	<a href="db/deleteUserHandle.php?id=<?php echo $user['id']; ?>" class="trash"><i class="fa fa-trash" aria-hidden="true"></i></a>
			            	<button type="submit" class="display-none" id="submit-<?php echo $user['id']; ?>"></button>
			            	<label for="submit-<?php echo $user['id']; ?>"  class="display-none"><i class="fa fa-check" aria-hidden="true"></i></label>
			            </td>
			        <?php }?>
		        </tr>
			<?php } ?> 
	    </tbody>
	</table>
</form>





<?php include 'includes/footer.php' ?>