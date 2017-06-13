<?php 

	$users = [
		[
			'username' => 'elena',
			'password' => '123456',
			'role' => 'admin'
		],
		[
			'username' => 'stefanija',
			'password' => '123456',
			'role' => 'mode'
		],
		[
			'username' => 'lilika',
			'password' => '123456',
			'role' => 'mode'
		],
		[
			'username' => 'ljubomir',
			'password' => '123456',
			'role' => 'mode'
		]
	];

	$one = [
			'username' => 'elena',
			'password' => '123456',
			'role' => 'admin'
		];
	array_push($users, $one);
	// var_dump($users);
 ?>