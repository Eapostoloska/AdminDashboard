<?php 

	function connect(){
		$pdo = new PDO("mysql:host=localhost;dbname=admindashboard", 'root', '');
		return $pdo;
	}


	function validateUser($username, $password){
		$pdo = connect();
		$stmt = $pdo->prepare("SELECT `username` FROM `users` WHERE `username` = '$username'");
	    $stmt->execute();

	    if($stmt->rowCount() > 0){
	        $q = $pdo->query("SELECT `password` FROM `users` WHERE `username` = '$username'");
			$f = $q->fetch();
			$result = $f['password'];

			if($password == $result){
				// all good
	        	$id = $pdo->query("SELECT `id`, `name`, `lastname`, `role` FROM `users` WHERE `username` = '$username'");
	        	$userId = $id->fetch();
				$_SESSION['user'] = $userId['id'];
				$_SESSION['name'] = $userId['name'];
				$_SESSION['role'] = $userId['role'];
				$_SESSION['lastname'] = $userId['lastname'];
				header('Location: ../landing.php');exit;
			}else{
				$errors['password'] = "Wrong Password";
				$_SESSION['errors'] = $errors;
				header('Location: ../index.php');exit;
			}
	    } else {
	        $errors['username'] = "No such User";
	        $_SESSION['errors'] = $errors;
			header('Location: ../index.php');exit;
	    }
	}

	function fetchUsers(){
		$pdo = connect();
		$u = $pdo->query("SELECT `id`, `name`, `lastname`, `email`, `username`, `role` FROM `users`");
    	$users = $u->fetchAll();
    	return $users;
	}

	function addNewUser($data){
		$pdo = connect();
		$sql = "INSERT INTO `users` (`name`, `lastname`, `email`, `username`, `password`, `role`) VALUES ('{$data['name']}', '{$data['lastName']}', '{$data['email']}', '{$data['username']}', '{$data['password']}', '{$data['role']}');";
		return $pdo->exec($sql);
	}

	function editUser($edit)
	{
		$pdo = connect();
		$sql = "UPDATE `users` SET `name` = '{$edit['name']}', `lastname` = '{$edit['lastName']}', `email` = '{$edit['email']}', `username` = '{$edit['username']}', `role` = '{$edit['role']}' WHERE `users`.`id` = '{$edit['id']}'";
		return $pdo->exec($sql);
	}

	function deleteUser($id)
	{
		$pdo = connect();
		$sql = "DELETE FROM `users` WHERE `users`.`id` = '$id'";
		return $pdo->exec($sql);
	}

 ?>