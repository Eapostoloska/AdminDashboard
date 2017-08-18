$( document ).ready(function() {

    jQuery('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });

    //tasks
    $("#submit-task").on("click", function () {
        var taskTitle = $("#task-title").val();
        var taskFor = $("#task-for").val();
        var taskPriority = $("#task-priority :selected").text();
        var taskDescription = $("#task-description").val();

        if (taskTitle != '' && taskFor != "") {
            if($.inArray(taskFor, users) >= 0){

                if (taskPriority == "Low Priority") {
                    var semaphoreColor = "low-priority";    
                }else if(taskPriority == "Medium Priority"){
                    var semaphoreColor = "medium-priority"
                }else if(taskPriority == "High Priority"){
                    var semaphoreColor = "high-priority"
                }
                var newTaskTitle = "<h3><div class='" + semaphoreColor + " semaphore'></div>" + taskTitle + "</h3>";
                var newTaskFor = "<h6><span>" + $(".current-user").text() + "</span>: task for <span>" + taskFor + "</span></h6>";
                var newTaskDescription = "<p>" + taskDescription + "</p>"

                var taskTemplate = "<div class='task'>" + newTaskTitle + newTaskFor + newTaskDescription + "</div>";
                $(".task-display-content").append(taskTemplate);

            }else{
                $("#task-for").val("No such user").css({"color":"#f44336"});
                $("#task-for").on("focus", function () {
                $(this).val('').css({"color":"#000"});
            })
            }



        }else if(taskTitle == '' && taskFor != ''){
            $("#task-title").val("Title is mandatory").css({"color":"#f44336"});
                $("#task-title").on("focus", function () {
                $(this).val('').css({"color":"#000"});
            })
        }else if(taskTitle != '' && taskFor == ''){
            $("#task-for").val("Assign task").css({"color":"#f44336"});
                $("#task-for").on("focus", function () {
                $(this).val('').css({"color":"#000"});
            })
        }else{
            $("#task-title").val("Title is mandatory").css({"color":"#f44336"});
                $("#task-title").on("focus", function () {
                $(this).val('').css({"color":"#000"});
            })
             $("#task-for").val("Assign task").css({"color":"#f44336"});
                $("#task-for").on("focus", function () {
                $(this).val('').css({"color":"#000"});
            })
        }
    })





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
        onclick: function (d, i) { },
        onmouseover: function (d, i) { },
        onmouseout: function (d, i) {  }
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

//gauge
var mail = c3.generate({
	bindto: '#mail-pie',
    data: {
        columns: [
            ['Mail Replies', 91.4]
        ],
        type: 'gauge',
        onclick: function (d, i) { },
        onmouseover: function (d, i) { },
        onmouseout: function (d, i) { }
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
        onclick: function (d, i) { },
        onmouseover: function (d, i) { },
        onmouseout: function (d, i) { }
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

//bar chart
var chart = c3.generate({
    bindto: '#bar-container',
    data: {
        columns: [
            ['Jon', 100],
            ['Jonny', 70],
            ['Jane', 80],
            ['Jenna', 60],
        ],
        type: 'bar',
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});

//pie chart
var chart = c3.generate({
    bindto: '#piechart-container',
    data: {
        // iris data from R
        columns: [
            ['Chrome', 150],
            ['Mozila', 100],
            ['Opera', 30],
            ['Safari', 70],
            ['Explorer', 1]
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

//donut chart
var chart = c3.generate({
    bindto: '#guestchart-container',
    data: {
        columns: [
            ['Women', 120],
            ['Men', 70],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
});

//server load
var mail = c3.generate({
    bindto: '#server-load',
    data: {
        columns: [
            ['Server Load', 97.4]
        ],
        type: 'gauge',
        onclick: function (d, i) { },
        onmouseover: function (d, i) { },
        onmouseout: function (d, i) { }
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

// Calendar
var themonth = 1;
renderCal(themonth);

$('.minusmonth').click(function(){
  themonth += -1;
  renderCal(themonth);
});

$('.addmonth').click(function(){
  themonth += 1;
  renderCal(themonth);
});

function renderCal(themonth){
$('.calendar li').remove();
$('.calendar ul').append('<li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li> <li>Su</li>');
var d = new Date(),
  currentMonth = d.getMonth()+themonth, // get this month
  days = numDays(currentMonth,d.getYear()), // get number of days in the month
  fDay = firstDay(currentMonth,d.getYear())-1, // find what day of the week the 1st lands on
  months = ['January','February','March','April','May','June','July','August','September','October','November','December']; // month names

$('.calendar p.monthname').text(months[currentMonth-1]); // add month name to calendar

for (var i=0;i<fDay-1;i++) { // place the first day of the month in the correct position
  $('<li>&nbsp;</li>').appendTo('.calendar ul');
}

for (var i = 1;i<=days;i++) { // write out the days
  $('<li>'+i+'</li>').appendTo('.calendar ul');
}

function firstDay(month,year) {
  return new Date(year,month,1).getDay();
}

function numDays(month,year) {
  return new Date(year,month,0).getDate();
}

var clicker = 0;
var min = 0;
var max = 0;

$('.calendar li').click(function(){ // toggle selected dates
  if(clicker==0){
    clicker=1;
    $('.calendar li').removeClass('red');
    $(this).addClass('red');
    min = $(this).text();
  } else {
    clicker=0;
    $(this).addClass('red');
    $('.calendar li.red').each(function(){
      max = $(this).text();
    });
    for(i=parseInt(min);i<parseInt(max);i++){
      $('.calendar li:nth-of-type('+(i+7+fDay-1)+')').addClass('red'); 
    }
  }
});
}