$(document).ready(function() {
	var changeQuote = function() {
		$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data) {
			$(".text").text(data.quoteText);
			$(".author span").text(data.quoteAuthor);
			var url = "https://twitter.com/intent/tweet?text=\"" + data.quoteText + "\" - " + data.quoteAuthor;
			$(".quote a").attr("href", url);
		});
	}

	changeQuote();

	$("button").click(function() {
		changeQuote();
	});
});