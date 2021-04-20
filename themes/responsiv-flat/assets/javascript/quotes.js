$( document ).ready(function() {
	$.ajax({url: "http://api.whoajoe.com/quotes.json", success: function(result){
		console.log(result);
	}});
});
