<?php include 'includes/header.php' ?>
<?php require 'data/userData.php'; ?>

<div class="land-grid">

	<div id="total-users" class="block">
		<div>
			<i class="fa fa-user" aria-hidden="true"></i>
			<h3>Total Users</h3>
		</div>
		<p class="statistic-counter">785</p>
	</div>

	<div id="avg-work" class="block">
		<div>
			<i class="fa fa-clock-o" aria-hidden="true"></i>
			<h3>Online Time</h3>
		</div>
		<p class="statistic-counter">590</p>
	</div>

	<div id="messages" class="block">
		<div>
			<i class="fa fa-envelope" aria-hidden="true"></i>
			<h3>New Mails</h3>
		</div>
		<p class="statistic-counter">23</p>
	</div>

	<div id="total-visits" class="block">
		<div>
			<i class="fa fa-users" aria-hidden="true"></i>
			<h3>Total Visitors</h3>
		</div>
		<p class="statistic-counter">5726</p>
	</div>

	<div id="weather" class="block">
		<div class="title">weather/temperature/hour</div>
	</div>

	<div id="weather-stat" class="block">
		<div class="title">stats about weather</div>
	</div>

	<div id="line-chart" class="block">
		<div class="title">line chart</div>
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
		<div id="profile-complete" class="block">profile completion</div>
		<div id="mail-replies" class="block">mail replies</div>
		<div id="bounce-rate" class="block">bounce rate</div>
	</div>

	<div id="bar-chart" class="block">
		<div class="title">bar chart (users)</div>
	</div>

	<div id="map" class="block">
		<div class="title">map</div>
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


