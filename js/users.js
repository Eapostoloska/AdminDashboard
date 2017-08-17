$( document ).ready(function() {

	$("#new-user-btn").on("click", function () {
		$(".new-user").removeClass("display-none");
	})

	$("#new-user-cancel").on("click", function () {
		$(".new-user").addClass("display-none");
		$(".new-user")[0].reset();
	})

	$(".edit-user").on("click", function () {
		var id = $(this).parent().parent().attr('data');
		$(this).parent().parent().append("<input type='hidden' name='id' value='" + id + "'>");
		$(this).parent().parent().children(".user-info").each(function(){
			var value = $(this).text();
			var data = $(this).attr('data');
			$(this).empty();
			if (data != "role") {
				$(this).append("<input type='text' name='" + data + "' value='" + value + "'>");
			}else{
				var html = "<select name='" + data + "'>"; 
					html += "<option value='moderator'>Moderator</option>";
					if (value == "observer") {
						html += "<option value='observer' selected >Observer</option>";
					}else{
						html += "<option value='observer'>Observer</option>";
					}
					if (value == "admin") {
						html += "<option value='admin' selected >Admin</option>";
					}else{
						html += "<option value='admin'>Admin</option>";
					}
					html += "</select>";
				$(this).append(html);
			}

		});
			$(this).addClass("display-none");
			$(this).siblings(".trash").addClass("display-none");
			$(this).siblings("label").removeClass("display-none");
	})

})