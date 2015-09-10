$(document).ready(function() {
	var changeQuote = function() {
		$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data) {
			$(".text").text(data.quoteText);
			$(".author span").text(data.quoteAuthor);
		});
	}

	changeQuote();

	$("button").click(function() {
		changeQuote();
	});
});