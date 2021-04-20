$( document ).ready(function() {
	$.ajax({url: "http://api.whoajoe.com/quotes.json", success: function(result){
		
		var quoteElement = $("#quote");

		var randomIndex = Math.floor(Math.random()*result.length);

		var quoteText = '"' + result[randomIndex]["quote"] + '"';

		quoteElement.hide();

		quoteElement.text(quoteText);

		quoteElement.fadeIn(3000);

	}});
});
