$( document ).ready(function() {
var users = ["elena", "stefanija", "ljubomir", "lilika", "ads"];

	$("#signOut").on("click", function () {
		// localStorage.clear(); //clears all local storage variables
		localStorage.removeItem("user"); //clears only the user local storage variable
		window.location = "index.php";
	});

            jQuery('.statistic-counter').counterUp({
                delay: 10,
                time: 2000
            });

     //tasks
    $("#submit-task").on("click", function () {
    	if ($("#task-title").val() != '' && $("#task-for").val() != '') {
            var taskPriority = $("#task-priority option:selected").text();

            if (taskPriority == "Low Priority") {
            	var taskTitle = "<h3><div class='low-priority semaphore'></div>" + $("#task-title").val() + "</h3>";
            }else if(taskPriority == "Medium Priority"){
            	var taskTitle = "<h3><div class='medium-priority semaphore'></div>" + $("#task-title").val() + "</h3>";
            }else if(taskPriority == "High Priority"){
            	var taskTitle = "<h3><div class='high-priority semaphore'></div>" + $("#task-title").val() + "</h3>";
            }

			if ($.inArray($("#task-for").val(), users) >= 0) {
        		var taskFor = "<h6>Assigned to: <span>" + $("#task-for").val() + "</span></h6>";
	            var taskDescription = "<p>" + $("#task-description").val() + "</p>";
	            var newTaskStructure = "<div class='task'>" + taskTitle + taskFor + taskDescription + "</div>";

	            $("#task-title").val('');
	            $("#task-for").val('');
	            $("#task-description").val('');
	            $("#error-msg").css({"display": "none"});

	            $(".task-display-content").append(newTaskStructure);
				restartInputs();

			}else{
				$("#task-assign-label").text("No such user").css({"color":"red"});
			}
			
        removeTask();    		
	    }else if($("#task-title").val() == '' && $("#task-for").val() != ''){
	    	$("#task-name-label").text("Name is required").css({"color":"red"});
	    }else if($("#task-title").val() != '' && $("#task-for").val() == ''){
	    	$("#task-assign-label").text("Task needs to be assigned").css({"color":"red"});
	    }else{
	    	$("#task-name-label").text("Name is required").css({"color":"red"});
	    	$("#task-assign-label").text("Task needs to be assigned").css({"color":"red"});
	    }
    })

    function restartInputs() {
        $("#task-title").on("focus", function () {
        	$("#task-name-label").css({"color": "#25bc9c"})
        })
        $("#task-for").on("focus", function () {
        	$("#task-assign-label").text("Assign to:").css({"color": "#25bc9c"})
        })            	
    }


    //remove
    function removeTask() {
        var removeTask = "<button class='remove-task'><i class='fa fa-trash-o'></i></div>";

        $(".semaphore").on("click", function () {
        	$(this).parent().css({"text-decoration": "line-through"});
        	$(this).parent().parent().css({"color": "#d2d2d2"});
        	$(this).addClass("task-finished");

        	if (($(this).parent().find(".remove-task").length) == 0) {
				$(this).parent().append(removeTask);
        	}
            
            $(".remove-task").on("click", function () {
				$(this).parent().parent().fadeOut(1000);
			})
        })
    }
    removeTask();


    $("#submit-task").on("click", function () {
            	if ($("#task-title").val() != '' && $("#task-for").val() != '') {
		            var taskPriority = $("#task-priority option:selected").text();

		            if (taskPriority == "Low Priority") {
		            	var taskTitle = "<h3><div class='low-priority semaphore'></div>" + $("#task-title").val() + "</h3>";
		            }else if(taskPriority == "Medium Priority"){
		            	var taskTitle = "<h3><div class='medium-priority semaphore'></div>" + $("#task-title").val() + "</h3>";
		            }else if(taskPriority == "High Priority"){
		            	var taskTitle = "<h3><div class='high-priority semaphore'></div>" + $("#task-title").val() + "</h3>";
		            }

		            var taskFor = "<h6>Assigned to: <span>" + $("#task-for").val() + "</span></h6>";
		            var taskDescription = "<p>" + $("#task-description").val() + "</p>";
		            var newTaskStructure = "<div class='task'>" + taskTitle + taskFor + taskDescription + "</div>";

		            $("#task-title").val('');
		            $("#task-for").val('');
		            $("#task-description").val('');
		            $("#error-msg").css({"display": "none"});

		            $(".task-display-content").append(newTaskStructure);
		            removeTask();    		
			    }else{
			    	$("#error-msg").css({"display": "initial"});
			    }
        

            })


            //remove
            function removeTask() {
	            var removeTask = "<button class='remove-task'><i class='fa fa-trash-o'></i></div>";

	            $(".semaphore").on("click", function () {
	            	$(this).parent().css({"text-decoration": "line-through"});
	            	$(this).parent().parent().css({"color": "#d2d2d2"});
	            	$(this).addClass("task-finished");

	            	if (($(this).parent().find(".remove-task").length) == 0) {
						$(this).parent().append(removeTask);
	            	}
		            
		            $(".remove-task").on("click", function () {
						$(this).parent().parent().fadeOut(1000);
					})
	            })
            }
	        removeTask();

	        // css weather icons , 2 scripts
	        $(document).ready(getLocation());
function getLocation() {
    if(navigator.geolocation){ navigator.geolocation.getCurrentPosition(function(location) {
        var lat = location.coords.latitude;
        var lon = location.coords.longitude;
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon;
        // reverse geocoding using googleapi
        $.getJSON(url, function(data) {
            for (let result of data.results) {
                if (result.types.includes('locality')) {
                    let loc = result.formatted_address;
                    getWeather(lat, lon, loc);
                    return;
                }
            }
        });
    }, function(error) {
        getIpLoc();
    })} else getIpLoc();
}

//get location from ip if navigator.geolocation fails
function getIpLoc() {
    $.getJSON("https://ipapi.co/json/", function(data) {
        var lat = data.latitude;
        var lon = data.longitude;
        var loc = data.city + ", " + data.country_name;
        getWeather(lat, lon, loc);
    });
}

//get weather data from darksky api
function getWeather(lat, lon, loc) {
    var apikey = 'cbac1613a7f52531a24d615ec2f9bf95';

    var url = 'https://api.darksky.net/forecast/' + apikey + '/' + lat + ',' + lon + '?callback=?';
    $.getJSON(url, result => renderWeather(result, loc));

}

function renderWeather(result, loc) {
    var scale = $("#temp").attr("class");
    setTimeout(function() {
        $(".loader").toggle();
        $(".header").html("Current Weather");
        $(".header").css("color", "white");
        $('#loc').html(loc);
        $(".weather").html(result.currently.summary);
        $(".celcius").html(
                //convertion to celcius and rounding to first decimal
                Math.round((result.currently.temperature - 32) * 5 / 9 * 10) / 10
         );
        $(".fahrenheit").html(
          Math.round(result.currently.temperature *10 )/10
        );
        
        setStyles(result.currently);
    }, 1000);
}

function changeTemp() {
    $(".celcius, .fahrenheit").toggle();
}

function SkyCons(icon, color) {
    var skycons = new Skycons({
        color: color
    });
    $('#icon').css("height", "100px");
    skycons.add(document.getElementById('icon'), icon);
    skycons.play();
}

function setStyles(res) {
    var temp =  Math.round((res.temperature - 32) * 5 / 9 );
    var time = new Date().getHours();
    var color = "";
    $('.wrap').css("opacity", "1");

    //set color based on time and temperature
    if (time > 20 || time < 5) {
        color = "#252839";
    } else {
        if (temp < 0) color = "#677077";
        else if (temp < 10) color = "#95a5a6";
        else if (temp < 20) color = "#7E8F7C";
        else color = "#89bdd3";    
    }

    SkyCons(res.icon, color);
    changeColor(color);
}

function changeColor(color) {
    $('body').css({
        backgroundColor: color,
        color: color
    });
    $('.button').css({
        backgroundColor: color,
    });
}




// TIME
$(function() {
  function Horloge() {
    var laDate = new Date();
		if(laDate.getHours() < 10) {
			var hours = "0" + laDate.getHours();
		}
		else {
			var hours = laDate.getHours();
		}
		if(laDate.getHours() < 12) {
			var hpercent = laDate.getHours()/12*360;
		}
		else {
			var hpercent = (laDate.getHours()-12)/12*360;
		}
		$('#h-aiguille').css('transform', 'rotate(' + hpercent + 'deg)');
		if(laDate.getMinutes() < 10) {
			var minutes = "0" + laDate.getMinutes();
		}
		else {
			var minutes = laDate.getMinutes();
		}
		if(laDate.getSeconds() < 10) {
			var seconds = "0" + laDate.getSeconds();
		}
		else {
			var seconds = laDate.getSeconds();
		}
		var spercent = laDate.getSeconds()/60*360;
		$('#s-aiguille').css('transform', 'rotate(' + spercent + 'deg)');
    var h = hours + ":" + minutes + ":" + seconds;
    $('#hour').text(h);
		var mpercent = minutes/60*360;
		$('#m-aiguille').css('transform', 'rotate(' + mpercent + 'deg)');
  }
  setInterval(Horloge, 1000);
});


// chart
// Navigation Variables
var weatherChart = c3.generate({
bindto: '#weather-chart',
	data: {
	  x: 'x',
	  columns: [
	  	['x', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	    ['This weeks temperature', 28, 25, 22, 27, 26, 25, 22, 20]
	  ],
	  type: 'area'
	},
	 axis: {
	    x: {
	        type: 'category' // this needed to load string x value
	    }
	}
});

var areaChart = c3.generate({
bindto: '#area-chart',
    data: {
    	 x: 'x',
        columns: [
        	['x', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            ['Visitors', 700, 720, 760, 740, 750, 700, 780, 790, 800, 720, 860, 800],
            ['New Members', 100, 120, 130, 140, 150, 250, 260, 180, 190, 200, 220, 230],
            ['Downloads', 400, 450, 430, 300, 480, 500, 470, 490, 400, 380, 340, 390]
        ],
        type: 'area-spline',
        groups: [['data1', 'data2']]
    },
	 axis: {
	    x: {
	        type: 'category' // this needed to load string x value
	    }
	}
});

//pie charts
var profile = c3.generate({
	bindto: '#profile-pie',
    data: {
        columns: [
            ['Profile Completion', 91.4]
        ],
        type: 'gauge',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
            values: [30, 60, 90, 100]
        }
    },
    size: {
        height: 180
    }
});
profile.load({
    columns: [['Profile Completion', 90]]
});

var mail = c3.generate({
	bindto: '#mail-pie',
    data: {
        columns: [
            ['Mail Replies', 91.4]
        ],
        type: 'gauge',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
            values: [30, 60, 90, 100]
        }
    },
    size: {
        height: 180
    }
});
mail.load({
    columns: [['Mail Replies', 70]]
});
var bounce = c3.generate({
	bindto: '#bounce-pie',
    data: {
        columns: [
            ['Bounce Rate', 91.4]
        ],
        type: 'gauge',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
            values: [30, 60, 90, 100]
        }
    },
    size: {
        height: 180
    }
});
bounce.load({
    columns: [['Bounce Rate', 20]]
});


// MAP
var map = L.map('mapid').setView([51.505, -0.09], 1);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([41.9168, 22.4083]).addTo(map)
    .bindPopup('Lilika\'s Office')
    .openPopup();

L.marker([41.9973, 21.4280]).addTo(map)
    .bindPopup('Stefanija and Ljubomir\'s Office')
    .openPopup();
L.marker([41.1231, 20.8016]).addTo(map)
    .bindPopup('Elena\'s Office')
    .openPopup();

});