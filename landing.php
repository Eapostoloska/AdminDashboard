<?php include 'includes/header.php' ?>
<?php require 'data/userData.php'; ?>

<div class="land-grid">

	<div id="total-users" class="block">
			<i class="fa fa-user fa-large" aria-hidden="true"></i>
		<div>
			<h3>Total Users</h3>
		<p class="statistic-counter">785</p>
		</div>
	</div>

	<div id="avg-work" class="block">
			<i class="fa fa-clock-o fa-large" aria-hidden="true"></i>
		<div>
			<h3>Online Time</h3>
		<p class="statistic-counter">590</p>
		</div>
	</div>

	<div id="messages" class="block">
			<i class="fa fa-envelope fa-large" aria-hidden="true"></i>
		<div>
			<h3>New Mails</h3>
		<p class="statistic-counter">23</p>
		</div>
	</div>

	<div id="total-visits" class="block">
			<i class="fa fa-users fa-large" aria-hidden="true"></i>
		<div>
			<h3>Total Visitors</h3>
		<p class="statistic-counter">5726</p>
		</div>
	</div>

	<div id="weather" class="block">
		<div class="title">weather/temperature/hour</div>
		<div class="weather-container">
			<div class="box">
	   		<div class="loader"><img src="img/loader.gif"></div>
	   		<!-- https://loading.io/ -->
				<div class="wrap">
				<canvas id="icon"></canvas>
				<div id="loc"></div>
				<div class="weather"></div>
				<div id="temp" onClick="changeTemp()">
					<span class="celcius"></span>
					<span class="fahrenheit"></span>
				</div>
	  			</div>
	 		</div>

			<div class="clock">
				<span id="hour"></span>
				<div id="cadran">
					<div id="h-aiguille" class="ai"></div>
					<div id="m-aiguille" class="ai"></div>
					<div id="s-aiguille" class="ai"></div>
				</div>
			</div>
	 	</div>
	</div>

	<div id="weather-stat" class="block">
		<div class="title">stats about weather</div>
		<div class="weather-stat-container">
			<div id="weather-chart"></div>
		</div>
	</div>

	<div id="line-chart" class="block">
		<div class="title">line chart</div>
		<div class="line-chart-content">
			<div id="area-chart"></div>
		</div>
	</div>

	<div id="create-task" class="block">
		<div class="title">create task</div>
		<div class="create-task-content">
		    <div class="group">      
		      <input type="text" required id="task-title">
		      <span class="bar"></span>
		      <label id="task-name-label">Task name:</label>
		    </div>
		    <div class="group">      
		      <input type="text" required id="task-for">
		      <span class="bar"></span>
		      <label id="task-assign-label">Assign to:</label>
		    </div>
			<select id="task-priority">
				<option>Low Priority</option>
				<option>Medium Priority</option>
				<option>High Priority</option>
			</select>
		    <div class="group">      
		      <textarea type="text" required="" id="task-description" rows="3" maxlength="200"></textarea>
		      <span class="bar"></span>
		      <label>Task description:</label>
		    </div>
				<button id="submit-task">Add</button>
			</div>
	</div>

	<div id="display-task" class="block">
		<div class="title">display task</div>
		<div class="task-display-content">
			<div class="task">
				<h3>
					<div class="high-priority semaphore"></div>
					Minimize CSS
				</h3>
				<h6>Assigned to: <span>Elena</span></h6>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
			<div class="task">
				<h3>
					<div class="low-priority semaphore"></div>
					Minimize CSS
				</h3>
				<h6>Assigned to: <span>Elena</span></h6>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		</div>
	</div>

	<div id="pie-charts" class="block">
		<div id="profile-complete">
			<h3>Profile Completion</h3>
			<div id="profile-pie"></div>
		</div>
		<div id="mail-replies">
			<h3>Mail Replies</h3>
			<div id="mail-pie"></div>
		</div>
		<div id="bounce-rate">
			<h3>Bounce Rate</h3>
			<div id="bounce-pie"></div>
		</div>
	</div>

	<div id="bar-chart" class="block">
		<div class="title">bar chart (users)</div>
	</div>

	<div id="map" class="block">
		<div class="title">map</div>
		<div id="mapid"></div>
	</div>

	<div id="platforms-pie" class="block">
		<div class="title">platforms used to visit</div>
	</div>
	<div id="guests-pie" class="block">
		<div class="title">guest registered</div>
	</div>
	<div id="server-pie" class="block">
		<div class="title">server load</div>
	</div>
	<div id="calendar" class="block">
		<div class="title">calendar</div>
	</div>
</div>


<?php include 'includes/footer.php' ?>


