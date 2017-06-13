$( document ).ready(function() {
var users = ["elena", "stefanija", "ljubomir", "lilika", "ads"];

	$("#signOut").on("click", function () {
		// localStorage.clear(); //clears all local storage variables
		localStorage.removeItem("user"); //clears only the user local storage variable
		window.location = "index.php";
	})

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

});